import React from 'react';
//import './App.css';
class Demo extends React.Component{
  // React.createRef 调用后可以返回一个容器，该容器可以储存被ref所标识的节点。该容器专人专用。
  myRef1 = React.createRef()
  myRef2 = React.createRef()

  showData = () =>{
    alert(this.myRef1.current.value)
  }
  showData2 = () => {
    this.myRef2.current.value='' // The data in the input area will lose, when mouse on Blur
  }
  testEvent = (event) =>{
    console.log('@',event.target.value)
  }
  render(){
    return (
      <div>&nbsp;
        <input ref={this.myRef1} type="text" placeholder="click show data"></input>&nbsp;
        <button onClick={this.showData}>Click Me</button> &nbsp;
        <input onBlur={this.testEvent} type="text" placeholder="lose mouse show data"></input>
      </div>
    )
  }
}

export default Demo;
