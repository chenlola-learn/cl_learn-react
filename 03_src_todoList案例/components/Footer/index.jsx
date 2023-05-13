import React, { Component } from 'react'

export default class Footer extends Component {

  //全选checkbox 的回调
  handleCheckAllTodos = (event)=>{
    this.props.checkAllTodos(event.target.checked)
  }

  //清除所有已完成任务的回调
  handleClearAllDone = () =>{
    this.props.clearAllDone()
  }
  render() {
    const {todos} = this.props
    //已完成的个数
    const doneCount = todos.reduce((pre,current)=>{return pre + (current.isDone?1:0)},0)    //reduce 对数组进行条件统计、条件求和、筛选最值。
    //总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAllTodos} checked={doneCount===total&&total!==0 ?true:false}/>
        </label> 
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
 