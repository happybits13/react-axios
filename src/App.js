import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';


import Blog from './containers/Blog/Blog';




class App extends Component {
  render() {
    return (
      // your url will always be routed with domain/test/.*
      //<BrowserRouter basename='test'>
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
