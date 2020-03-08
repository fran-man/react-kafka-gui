import React from 'react';
import ReactDOM from 'react-dom';
import ButtonCell from './ButtonCell.js'
import './index.css';


class TopicRow extends React.Component {
  render(){
    return(<tr>
          <td>Row Info: {this.props.content}</td>
          <td>TODO</td>
          <td>TODO</td>
          <td>TODO</td>
          <ButtonCell/>
          </tr>)
  }
}

class TopicHeader extends React.Component {
  render(){
    return(<tr>
          <th>Topic Name</th>
          <th>Number of Partitions</th>
          <th>Number of Events</th>
          <th>TTL</th>
          <th>Send an Event!</th>
          </tr>)
  }
}

class TableRows extends React.Component {
  render(){
    const rows = []

    rows.push(<TopicHeader/>)

    for(let i = 1; i < 10; i++){
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
