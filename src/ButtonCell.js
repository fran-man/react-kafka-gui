import React from 'react';

class Button extends React.Component {
  render(){
    return(<button onClick={() => sendMessage()}>Send</button>)
  }
}

class ButtonCell extends React.Component {
  render(){
    return(<td class="buttoncell">
      <Button /><br/><input type="text"/>
      </td>
    )
  }
}

function sendMessage() {
  console.log("It works!");
}

export default ButtonCell
