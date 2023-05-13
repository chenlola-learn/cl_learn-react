import React from 'react';
//import './App.css';
class Advenced_Controlled_Component extends React.Component{
  state = {username:'',password:''}

  handleSubmit=(event)=>{
    event.preventDefault();
    alert(`your input name :${this.state.username}, your input password ${this.state.password}`)
  }
  saveFormData =(dataType)=>{
    return (event)=>{  //在input中，react真正拿到的回调函数。
      console.log(dataType,event.target.value)
      this.setState({[dataType]:event.target.value})
    }
  }
  saveFormData2 =(dataType,event)=>{
    return this.setState({[dataType]:event.target.value})
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Advanced_Controlled_Component</h2>
        {/* 下面代码中， this.saveFormDate() 加了括号，说明将这个函数的返回值作为onChange的回调函数，所以需要saveFormData()的返回值是一个函数 */}
        {/* 使用了函数的柯里化 */}
        {/*
        Username : <input onChange={this.saveFormData('username')} type="text" name="username"/>
        Password : <input onChange={this.saveFormData('password')} type="password" name="password"/>
         */}
        {/* 方法2: 不使用函数的柯里化，传入input的值到state    username,password 的input 一个嵌套一个直接setState了，均可实现  
        */}
        Username : <input onChange={(event)=>{this.saveFormData2('username',event)} } type="text" name="username"/>
        Password : <input onChange={(event)=>{this.setState({['password']:event.target.value})}} type="password" name="password"/>
        <button>Login</button>
      {/*总结，在App7中，分别对username 和 password 的input 定义了两个函数来完整状态的维护；
        App8中 不使用柯里化直接传入dataType和event， 
        实际两种方法都会用到
      */}
      </form>
    )
  }

}
export default Advenced_Controlled_Component;