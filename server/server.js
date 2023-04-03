const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const multer = require('multer');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

const Avatar = require ('./models/Avatar')
const PORT = process.env.PORT || 3001;
const app = express();

// MULTER BLOCK
const storage = multer.memoryStorage();
// keeping a limit on the img files for multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 500000 },
});

app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
  } else {
    let imageUploadObject = {
      file: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      },
      fileName: req.file.originalname
    };
    if (imageUploadObject.file.data) {console.log('there is image data;'+req.file.mimetype);}
    res.json(imageUploadObject);
  }
});
// END MULTER BLOCK

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create an HTTP server instance
const httpServer = http.createServer(app);

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app, bodyParserConfig: { limit:"1mb" } });

  // Initialize socket.io
  const io = socketIo(httpServer);

  // Listen for incoming socket connections
  io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for a chat message event
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      // Emit the message to all connected sockets
      io.emit('chat message', msg);
    });

    // Listen for a disconnect event
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });

  // Start the HTTP server
  httpServer.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
