import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    postSelectedHandler (id) {
        this.setState({selectedPostId: id})
    }

    componentDidMount(){
        // .then gets an object as return. axios supports promises(3 outcomes: fulfilled, rejected, pending). axios will complete promises after API call results returned
        // .get returns a promise
        axios.get('/posts')
        // .then takes in a function as argument, and executes function promise is done.
        // axios pass output of .get to .then into "response" in this case
            .then(response=>{
                // take out first 4 in object
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post=>{
                   return {
                       ...post,
                       author: 'Sean'
                   } 
                });
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        
        if(!this.state.error){
            posts = this.state.posts.map( post =>{
                return(
                    <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author} 
                        clicked={() => this.postSelectedHandler(post.id)}>
                    </Post>
                )
            });
        }
        

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;