import React from 'react';

class Button extends React.Component {
  render(){
    return(<button onClick={() => myPrint()}>Send</button>)
  }
}

function myPrint() {
  console.log("It works!");
}

export default Button
