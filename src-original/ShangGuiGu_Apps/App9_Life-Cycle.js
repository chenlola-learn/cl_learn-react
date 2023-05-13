import React from 'react';
import ReactDOM from 'react-dom';
//import './App.css';

class Life extends React.Component{

  //组件挂在完毕后执行一次
  componentDidMount(){

  }
  //组件将要卸载
  componentWillUnmount(){

  }
  render(){
    return(
      <div id="11">
        <h2>学不会怎么办</h2>
        <button>不活了</button>
      </div>
    )
  }
}

export default Life;