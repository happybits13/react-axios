import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
//import NewPost from '../NewPost/NewPost';
import './Blog.css';


import Posts from '../Posts/Posts';

import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import asyncComponent from '../../hoc/asyncComponent';


// a way to import only when a component is called
// this method of lazy loading is useful for conditional loading. eg. if auth is required. only load after auth
// alternative is React Suspense
const AsyncNewPost = asyncComponent(() => {
    return import ('../NewPost/NewPost');
});


class Blog extends Component {
    
    state = {
        // can use componentDidMount to check. If false, props.history.replace() to another page. Can also just check at route components.
        auth: true
    };


    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* Do not use <a href="/link-id"> </a> in router. this creates another request the page */}
                            {/* Instead, use <Link>. This routes to the url and re-render the page. Does not request for a new page */}
                            {/* React treats '/' as a prefix. By adding exact, indicates that '/' is the full path. Does not take new-post as what is after the prefix*/}
                            {/* Class=active is applied to all links that matched. '/' matches '/' and /new-post*/}
                            <li><NavLink exact to="/posts">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: 'submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                
                {/* <Route exact path="/" render={()=><h1>Home</h1>}></Route> */}
                {/* Scans the route from top to btm. As long as routes match, components will be rendered. If <Route> is defined within <Switch>, will only route the first matched*/}
                {/* Route parameters(on the url) are passed to props of components specified. These props can be useful for reference */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}></Route> : null}
                    {/* id can be viewed in props.match.params.id in FullPost */}
                    <Route path="/posts" component={Posts}></Route>
                    {/* redirect any non-recongized links to /posts */}

                    {/* Use either 1 [Route render or redirect / to /posts ]to handle unhandled urls */}
                    <Route render={() => <h1>Not found</h1>}></Route>
                    {/* <Redirect from='/' to='/posts'></Redirect> */}

                </Switch>
            </div>
        );
    }
}

export default Blog;