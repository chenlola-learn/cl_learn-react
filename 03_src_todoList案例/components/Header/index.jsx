import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

export default class Header extends Component {

  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired,
  }

  //键盘事件的回调
  handleKeyUp = (event) =>{
    const {target,keyCode} = event
    if(keyCode !==13) return
    //添加的todo名字不能为空
    if(target.value.trim()===''){
      alert('输入不能为空')
      return
    }
    const todoObj = {id:nanoid(), behaviour:target.value,done:false}
    this.props.addTodo(todoObj);
    //清空输入
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
