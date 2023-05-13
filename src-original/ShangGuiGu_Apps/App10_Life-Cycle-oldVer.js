import React from 'react';
import ReactDOM from 'react-dom';
//import './App.css';

class Count extends React.Component{
  constructor(props){
    console.log('count-constructor');
    super(props)
    this.state = {count:0}
  }

  //初始化状态
  
  add = () => {
    this.setState({count:this.state.count + 1})
  }
  death = () =>{
    ReactDOM.unmountComponentAtNode(document.getElementById);
  }
  
  //组件将要挂载的勾子
  componentWillMount(){
    console.log('count component will mount');
  }

  //组件挂载完毕的钩子
  componentDidMount(){
    console.log('count component Did mount');
  }

  //组件将要卸载的勾子
  componentWillUnmount(){
    console.log('count component will unmount' )  ;
  }

  //组件是否应该被更新，如果不写则react自动补充且返回值为true。
  shouldComponentUpdate(){
    console.log('count should Component Update?' );
    console.log(this.state.count)

    if (this.state.count>=4)
      {
        return true
      }
    return false
  }


  render(){
    console.log('count render')
    return(
      <div id="11">
        <h2>当前求和为: {this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.death}></button>
      </div>
    )
  }

}
export default Count;