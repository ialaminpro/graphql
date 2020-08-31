import React, { Component } from 'react';
import {DisplayBooks} from '../queries/customs';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }

  handleChange = (bookId) => {
    this.setState({ selected: bookId });
  }

  render(){  
   
      return(
          
          <div>
              <ul id="book-list">
              <DisplayBooks onClick={this.handleChange}/>
              </ul>
              <BookDetails  bookId={ this.state.selected } />
          </div>
      );
  }
}

export default BookList;