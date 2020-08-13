import React, { Component } from 'react';
import axiosInstance from '../../axios';
import './NewPost.css';

import {Redirect} from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    postDataHandler = () => {
        const postData = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }

        // takes in 3 arguments. 1st: server to http post. 2nd: data to post. 3rd is optional, conversoin of data to compatible format
        // axios converted the object format(postData) to string format for http post req. response is returned in .then()
        axiosInstance.post('/posts', postData)
            .then(response => {
                console.log(response);
                // redirects to posts and replace history to /posts. Alternative to using redirect component to moving to next page
                //this.props.history.replace('/posts');
                // redirects to /post. another alternative to using redirect component to moving to next page
                //this.props.history.push('/posts');
                this.setState({submitted: true});
            });
    }

    render () {
        //  
        let redirect = null;

        if(this.state.submitted)
            redirect = <Redirect to="/posts"></Redirect>

        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;