import React, { Component } from 'react';
import {DisplayAuthors,bookMutation} from '../queries/customs';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';
import { graphql,compose } from '@apollo/client/react/hoc';

class AddBook extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
    }

    submitForm(e){
        e.preventDefault();
        console.log(this.props);
        // const { loading, error, data } = useQuery(addBookMutation);
        console.log(this.state);
        // addBookMutation()

    }

    render(){
        return(
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e) => this.setState({name:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e) => this.setState({genre:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e) => this.setState({authorId:e.target.value})}>
                        <option>Select author</option>
                        <DisplayAuthors/>
                    </select>
                </div>
                <button>+</button>

            </form>
        );
    }
}


export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);

// export default AddBook;