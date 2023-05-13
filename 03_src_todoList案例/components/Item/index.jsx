import React, { Component } from 'react'

export default class Item extends Component {

  state={mouse:false} //识别鼠标移入、移出

  //鼠标移入、移出的回调
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  //勾选、取消勾选某一个todo回调。
  handleCheck=(id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }
  //删除一个todo的回调
  handldDelete=(id)=>{
    if(window.confirm('确定删除')){   //要写window.confirm, 只写confirm会报错
      this.props.deleteTodo(id)
    }

    
  }

  render() {
    const{id,name,isDone} = this.props
    return (
      <li style={{backgroundColor:this.state.mouse ? '#add':'white'}}onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
        <label>
          <input type="checkbox" checked={isDone} onChange={this.handleCheck(id)}/> 
          <span>{this.props.behaviour}</span>
        </label>
        <button className="btn btn-danger" onClick={ ()=>this.handldDelete(id)} style={{display:this.state.mouse?'block':'none'}}>删除</button>
      </li>
    )
  } 
}
