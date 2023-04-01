const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const multer = require('multer');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const mongoose = require('mongoose');

const Avatar = require ('./models/Avatar')
const PORT = process.env.PORT || 3001;
const app = express();



// MULTER BLOCK

const storage =  multer.memoryStorage();
// keeping a limit on the img files for multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, 
  // fileFilter: function (req, file, cb) {
  //   if (!file.mimetype.startsWith('image/')) {
  //     return cb(new Error('Only image files are allowed!'));
  //   }
  //   cb(null, true);
  // },
});

app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
  } else {
    console.log('receiving file');
    let imageUploadObject = {
      file: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      },
      fileName: req.body.fileName
    };
    if (imageUploadObject.file.data) {console.log('there is image data;'+req.file.mimetype);}
    res.json({ message: 'File uploaded successfully' });
  }
});


// END MULTER BLOCK

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
