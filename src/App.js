import React, { Component } from 'react';
import { BrowserRouter }from 'react-router-dom'

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my_app"> this is the format if you are using a subdomain for the app e.g. paulcaruana.com/my_app 
      <BrowserRouter> 
      <div className="App">
        <Blog />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
