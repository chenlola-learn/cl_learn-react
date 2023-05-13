import React from 'react';
//import './App.css';

function Person(props){
  console.log(props);
  const {name,age,sex} = props
  return (
    <ul>
      <li>姓名:{name}</li>
      <li>性别:{sex}</li>
      <li>年龄:{age+1}</li>
    </ul>
  )
}

export default Person;
