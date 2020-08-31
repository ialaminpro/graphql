import React, { Component } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// appllo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  
  cache: new InMemoryCache()
});




class App extends Component {
  render() {
    
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading Book List</h1>
          <BookList/>
          <AddBook/>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;