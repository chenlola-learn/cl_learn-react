import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  render() {
    const {users, isFirst, isLoading, errorInfo} = this.props 
    return (
      <div className="row">
        {
          isFirst ? <h2>Welcome to App.</h2>:
          isLoading ? <h2>Loading.....</h2>:
          errorInfo?<h2 style={{color:'red'}}>{console.errorInfo.message}</h2>:
          this.props.users.map(  (userObj) => {
          return (
          <div key={userObj.id} className="card">
            <a rel="noreferrer" href={userObj.html_url} target="_blank">
              <img src={userObj.avatar_url} style={{width:'100px'}}/>
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
