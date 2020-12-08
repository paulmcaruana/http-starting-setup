import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';


const asyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }

       render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
                                exact
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li> {/*simple version of using to with more complex version below*/}
                            <li><NavLink to={{                   
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={asyncNewPost}/> : null }
                    <Route path="/posts" component={Posts}/>
                    <Route render={() => <h1>Not found</h1>}/>
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;