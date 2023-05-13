import React, { Component } from 'react';
import Search from './components/Search/Search-index.js'
import List from './components/List/List-index.js'

// import Search from './components/Search'
// import List from './components/List'

export default class App extends Component {
  //App -> Search -> List -> (item)


  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    )
  }
}