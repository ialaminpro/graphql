import React, { Component } from 'react';
import {DisplayBookDetails} from '../queries/customs';

class BookDetails extends Component {

    render(){
        return(
            <div id="book-details">
               <DisplayBookDetails bookId={this.props.bookId} />
            </div>
        );
    }
}

export default BookDetails;