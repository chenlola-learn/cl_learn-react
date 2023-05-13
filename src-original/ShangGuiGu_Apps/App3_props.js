import React from 'react';
//import './App.css';

class Person extends React.Component{
  render(){
    const {name,age,sex} = this.props
    console.log(this)
    return (
      <ul>
        <li>姓名:{name}</li>
        <li>性别:{sex}</li>
        <li>年龄:{age}</li>
      </ul>
    )
  }
}
export default Person;
