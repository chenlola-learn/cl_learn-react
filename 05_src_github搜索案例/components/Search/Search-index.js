import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {

  search=()=>{
    //get user's input.
    const {keyWordElement:{value:keyWord}} = this   //连续结构赋值+给Value重命名。
    //let app update state before sending net request.
    this.props.updateAppState({isFirst:false, isLoading:true})
    //send net request.
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response =>{
        //notify App already updated after request succeed.
        this.props.updateAppState({isLoading:false,users:response.data.items})
      },
      error => {
        //notify App already updated after request failed.
        this.props.updateAppState({isLoading:false,errorInfo:error})
      }
    )
  }
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input ref={c=>this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
            <button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    )
  }
}
