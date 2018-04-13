import React, { Component } from 'react';
import Home from './home'
import About from './about'
import Topics from './topics'
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path='/' component = {Home} />
          <Route path='/about' component = {About} />
          <Route path='/topics' component = {Topics} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
