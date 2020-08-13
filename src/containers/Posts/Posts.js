import React, {Component} from 'react';
import axiosInstance from '../../axios';

import Post from '../../components/Post/Post';
import './Posts.css';

import {Link, Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component{

    state = {
        posts: []
    };

    postSelectedHandler (id) {
        // this is navigating programatically. Alternative to using <Link>
        //this.props.history.push('/posts/' + id);
    }

    componentDidMount(){
        console.log(this.props);
        // .then gets an object as return. axios supports promises(3 outcomes: fulfilled, rejected, pending). axios will complete promises after API call results returned
        // .get returns a promise
        axiosInstance.get('/posts')
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
                console.log(error);
            });
    }
    

    render(){

        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        
        if(!this.state.error){
            posts = this.state.posts.map( post =>{
                return(
                    <Link to={'/posts/' + post.id} key={[post.id]}>
                        <Post 
                            title={post.title} 
                            author={post.author} 
                            clicked={() => this.postSelectedHandler(post.id)}>
                        </Post>
                    </Link>
                )
            });
        }

        return(
        <div>
            <section className="Posts">
                {posts}
            </section>
            {/* /posts + /id */}
            <Route path={this.props.match.url + '/:id'} exact component={FullPost}></Route>
        </div>
        );
        
    }
}

export default Posts;