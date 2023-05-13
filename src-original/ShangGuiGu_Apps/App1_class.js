import React from 'react';
//import './App.css';

class App1_Weather extends React.Component{
  //构造器调用几次？  --- 1次
  constructor(props){
    console.log("constructor")
    super(props)
    this.state = { isHot:true,}
    this.changeWeather = this.changeWeather.bind(this)    //方法之一，将方法：changeWeather中的this指向该类的实例对象。
  }
  //render()函数调用几次？ --- 1+n 次
  render(){
    console.log("render()")
    return <h1 onClick={this.changeWeather}>Today is {this.state.isHot? 'hot':'cold'},Today has wind</h1>
  }
  //changeWeather 掉用几次？ --- 点几次 调用几次。
  changeWeather(){
    //changeWeather 放在了哪里？ ----- 放在了 Weather 的实例对象上，供实例使用。
    //由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用。
    //类中的方法默认开启了局部严格模式，所以chnageweather中的this 为undefined.
    
    //获取原来的isHot值
    //# const isHot = this.state.isHot
    //注意！！！ 状态（state） 不可直接更改，要借助内置API去更改。
    //错误的,直接更改：this.state.isHot = !isHot ;
    const isHot = this.state.isHot;
    this.setState({isHot:!isHot})   //修改数据的更新是一种合并，不是替换（将setState中的数据全部替换掉原state中的变量。）
  }
}



export default App1_Weather;
