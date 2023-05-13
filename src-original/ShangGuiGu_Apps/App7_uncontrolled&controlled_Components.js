import React from 'react';
//import './App.css';
class Uncontrolled_Component extends React.Component{
  
  handleSubmit = (event) =>{
    event.preventDefault();
    const {username,password} = this
    alert(`your input username: ${username.value}, your password is ${password.value}`)
  }
  render(){
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h2>Uncontrolled_Component</h2>
        Username : <input ref={(c)=>{this.username=c}} type="text" name="username"/>
        Password : <input ref={(c)=>{this.password=c}} type="password" name="password"/>
        <button>Login</button>
      </form>
    )
  }
}

class Controlled_Component extends React.Component{
  state = {username:'',password:''}
  saveUsername =(event)=>{
    console.log('@')
    this.setState({username:event.target.value})
  }
  savePassword =(event)=>{
    console.log('@')
    this.setState({password:event.target.value})
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    alert(`your input name :${this.state.username}, your input password ${this.state.password}`)
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Controlled_Component</h2>
        Username : <input onChange={this.saveUsername} type="text" name="username"/>
        Password : <input onChange={this.savePassword} type="password" name="password"/>
        <button>Login</button>
      </form>
    )
  }

}
export default Uncontrolled_Component;
export {Controlled_Component};