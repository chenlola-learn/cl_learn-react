import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
export default class index extends Component {
  state = {
    users:[],   //初始化状态，初始值为数组
    isFirst:true,   // is first open this page.
    isLoading:false,    //is loading??
    errorInfo:'',   //save some error information when sending require.
  }

  componentDidMount(){
    this.token=PubSub.subscribe('chenlola',(msg,data)=>{
      console.log('list component received data:',data);
      this.setState(data);
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users, isFirst, isLoading, errorInfo} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>Welcome to App.</h2>:
          isLoading ? <h2>Loading.....</h2>:
          errorInfo?<h2 style={{color:'red'}}>{console.errorInfo.message}</h2>:
          this.state.users.map(  (userObj) => {
          return (
          <div key={userObj.id} className="card">
            <a rel="noreferrer" href={userObj.html_url} target="_blank">
              <img src={userObj.avatar_url} style={{width:'100px'}} alt=""/>
            </a>
            <p className="card-text">{userObj.login}</p>
          </div>
          )
        } )
        }
      </div>
    )
  }
}
