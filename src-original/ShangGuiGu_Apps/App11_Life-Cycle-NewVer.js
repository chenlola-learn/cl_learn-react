import React from 'react';
import ReactDOM from 'react-dom';
//import './App.css';

class Count extends React.Component{

  /*
  1. 初始化阶段：由ReactDOM.render()触法---初次渲染
      1.1 constructor()
      1.2 getDerivedStateFromProps()
      1.3 render()  =====>常用
      1.4 componentDidMount()   =====>常用

  2 更新阶段：由组件内部this.setState()或父组件重新render触发
      2.1 getDerivedStateFromProps()
      2.2 shoudComponentUpdate()
      2.3 render()  =====>常用
      2.4 getSnapshotBeforeUpdate()
      2.5 componentDidUpdate()
  
  3 卸载组件： 由ReactDOM.unmountComponentAtNode()触发
      3.1 componentWillUnmount()  =====>常用
      */


}
export default Count;