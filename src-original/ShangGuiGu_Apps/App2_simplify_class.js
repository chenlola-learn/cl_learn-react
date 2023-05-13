import React from 'react';
//import './App.css';

class App2_Weather extends React.Component{
  state = {isHot:true,wind:'strong'}
  render(){
    console.log("render()")
    return <h1 onClick={this.changeWeather}>Today is {this.state.isHot? 'hot':'cold'},Today wind is {this.state.wind}.</h1>
  }
  //自定义方法 --- 要用赋值语句的形式 和 箭头函数。
  changeWeather = ()=>{
    const isHot = this.state.isHot;
    this.setState({isHot:!isHot})
  }
}

export default App2_Weather;
