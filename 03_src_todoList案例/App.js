import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  //状态在哪里，操作状态的方法就在哪里。

  state = {
    todos:[
    {id:'001', behaviour:'Launch', isDone:false},
    {id:'002', behaviour:'Play SteamDeck', isDone:true},
    {id:'003', behaviour:'Dinner', isDone:false},
    {id:'004', behaviour:'Sleep', isDone:false},
  ]
}
  //addTodo用于添加一个todo，接受的参数是todo对象。
  addTodo= (todoObj)=>{
    //获取原todos
    const {todos} = this.state
    //追加一个todo
    const newTodos = [todoObj,...todos]
    //更新状态
    this.setState({todos:newTodos})
  }

  //updateTodo is used to update a existed todo object.
  updateTodo = (id,isDone)=>{
    //获取状态中的todos.
    const{todos} = this.state
    const newTodos = todos.map(  (todoObj)=>{
      if(todoObj.id===id) return {...todoObj,isDone}  // isDone 等同于 isDone:isDone
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  //handle Delete a todo object.
  deleteTodo = (id) =>{
    //获取原来的todos
    const {todos} = this.state
    //删除制定id的todo对象
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  //用于checkbox全选
  checkAllTodos = (isDone) =>{
    //获取原来的todos
    const{todos} = this.state
    //加工数据
    const newTodos = todos.map((todoObj)=>{
      return{...todoObj,isDone:isDone}
    })
    this.setState({todos:newTodos})
  }
  //清除所有已完成的
  clearAllDone = () => {
    const {todos} = this.state
    const newTodos= todos.filter((todoObj)=>{
      return !todoObj.isDone
    })
    this.setState({todos:newTodos})
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={this.state.todos} checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone } />
        </div>
      </div>
    )
    
  }
}