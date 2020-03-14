import React from 'react';
import ReactDOM from 'react-dom';
import TopicRow from './TopicRow.js'
import './index.css';

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
  constructor(props) {
    super(props);
    this.state = {topics: topics};
  }

  componentDidMount() {
    fetch('http://localhost:8082/topics')
    .then(res => res.json())
    .then((data) => {
      this.setState({topics: data})
    })
  }

  render(){
    const rows = []

    rows.push(<TopicHeader/>)

    for(let i = 0; i < this.state.topics.length; i++){
      rows.push(<TopicRow topicName={ this.state.topics[i] } />)
    }

    return(rows)
  }
}

const topics = []

ReactDOM.render(
  <div>
    <table>
     <TableRows />
    </table>
  </div>,
     document.getElementById('root'));
