
import React from 'react';
import ReactDOM from 'react-dom';
//import './App.css';

class Person extends React.Component{
  state = {
    persons:[
      {id:1,name:'黄xx',age:20},
      {id:2,name:'李xx',age:30},
    ]
  }
  add = ()=>{
    const {persons} = this.state
    const p = {id:persons.length+1,name:'孙xx', age:40}
    this.setState({persons:[p,...persons]})
  }

  render(){
    return(
      <div>
        <h2>show information of one person</h2>
        <button onClick={this.add}>add a new person.</button>
      <ul>
        {
          this.state.persons.map(
            (personObj)=>{
              return <li key={personObj.id}>
                {personObj.id}
                {personObj.name} --- {personObj.age}
              </li>
            }
          )
        }
      </ul>
      </div>
    )
  }
}
export default Person;