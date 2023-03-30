import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './components/home/Home';
// import Detail from './pages/Detail';
 import NoMatch from './components/home/NoMatch';
import Login from './components/home/Login/Login';
import Signup from './components/home/signUp/SignUp';
// import Nav from './components/Nav';
import { MainProvider } from './utils/GlobalState';
import UserHome from './components/user/UserHome';
import HostHome from './components/host/HostHome'
// import Success from './pages/Success';
// import OrderHistory from './pages/OrderHistory';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <MainProvider>
            {/* <Nav /> */}
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
               <Route 
                path="/UserHome" 
                element={<UserHome />} 
              />
                <Route 
                path="/HostHome" 
                element={<HostHome />} 
              />
              {/* <Route 
                path="/success" 
                element={<Success />} 
              />
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
              <Route 
                path="/products/:id" 
                element={<Detail />} 
              /> */}
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
          </MainProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
