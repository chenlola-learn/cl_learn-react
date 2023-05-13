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
//如何增加props中的必要值、数据类型、默认值的限制。react16+版本已将propTypes挪出核心库，设置了单独的库 prop types lib
Person.propTypes = {
  name:React.propTypes.string
}

export default Person;
