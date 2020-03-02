import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TopicRow extends React.Component {
  render(){
    return(<tr>
      <td>Row Info: {this.props.content}</td>
  </tr>)
  }
}

class TableRows extends React.Component {
  render(){
    const rows = []

    for(let i = 1; i< 10; i++){
      rows.push(<TopicRow content={i} />)
    }

    return(rows)
  }
}

ReactDOM.render(
  <div>
    <table>
     <TableRows />
    </table>
  </div>,
     document.getElementById('root'));
