import React from 'react';
import {useQuery } from '@apollo/client';
import {getBooksQuery, getAuthorsQuery, getBookQuery} from './queries';

    
const DisplayBooks =  (props) => {

    function handleChange(event) {
        props.onClick(event.id);
    }

    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <option disabled>Loading books..</option>;
    if (error) return <p>Error :(</p>;

    return data.books.map(({ id, name }) => (  
        <li key={ id } onClick={() => handleChange({ id })}  >{ name }</li>
    ));
}

const DisplayAuthors =  () => {
    const { loading, error, data } = useQuery(getAuthorsQuery);

    if (loading) return <option disabled>Loading authors..</option>;
    if (error) return <p>Error :(</p>;
  
    return data.authors.map(({ id, name }) => (
        <option key={ id } value={id}>{ name }</option>
    ));
}


const DisplayBookDetails =  ({bookId}) => {
    
    const { loading, error, data } = 
    useQuery(getBookQuery, {
        variables: { id:bookId },
      });

    if (loading) return <option disabled>Loading book details..</option>;
    if (error) return <p>Error :(</p>;
        const {book} = data;
      
    if(book){
        return(
            <div>
                <h2>Book Name: { book.name }</h2>
                <p>Genre: { book.genre }</p>
                <p>Author Name: { book.author.name }</p>
                <p>All books by this author:</p>
                <ul className="other-books">
                    { book.author.books.map(item => {
                        return <li key={item.id}>{ item.name }</li>
                    })}
                </ul>
            </div>
        );
    } else {
        return( <div>No book selected...</div> );
    }
}
export{DisplayBooks, DisplayAuthors, DisplayBookDetails}