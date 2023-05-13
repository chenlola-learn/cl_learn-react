import React, { Component } from 'react';
import Search from './components/Search/Search-index.js'
import List from './components/List/List-index.js'

// import Search from './components/Search'
// import List from './components/List'

export default class App extends Component {
  //App -> Search -> List -> (item)

  state = {
    users:[],   //初始化状态，初始值为数组
    isFirst:true,   // is first open this page.
    isLoading:false,    //is loading??
    errorInfo:'',   //save some error information when sending require.
  }
  // //update state in App.
  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}