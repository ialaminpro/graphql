import React from 'react';
import {useMutation} from '@apollo/client';
import {addBookMutation, getBooksQuery} from '../queries/queries';
import {DisplayAuthors} from '../queries/customs';

function AddBook() {
    
    let name, genre, authorId;
    const [addBook, { data }] = useMutation(addBookMutation);
    
    return (
        <div>
          <form onSubmit={e => {
                    e.preventDefault();
                    addBook({ 
                        variables: { 
                            name: name.value, 
                            genre: genre.value, 
                            authorId: authorId.value 
                        },
                        refetchQueries: [{ query: getBooksQuery }]
                    });

                    name.value = '';
                    genre.value = '';
                    authorId.value = '';
                }
            }
          >
            <div className="field">
                    <label>Book name:</label>
                    <input ref={node => { name = node; }} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" ref={node => { genre = node; }}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select ref={node => { authorId = node; }}>
                        <option>Select author</option>
                        <DisplayAuthors/>
                    </select>
                </div>
            <button type="submit">Add</button>
          </form>
        </div>
      );
}

export default  AddBook