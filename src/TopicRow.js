import React from 'react';
import ButtonCell from './ButtonCell.js'

class TopicRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic: this.props.topicName,
                   topicPartitions: 0 };
  }

  componentDidMount() {
    fetch('http://localhost:8082/topics/' + this.props.topicName)
    .then(res => res.json())
    .then((data) => {
      this.setState({topicPartitions: data.partitions.length})
    })
  }

  render(){
    return(<tr>
          <td>{ this.state.topic }</td>
          <td>{ this.state.topicPartitions }</td>
          <td>TODO</td>
          <td>TODO</td>
          <ButtonCell/>
          </tr>)
  }
}

export default TopicRow
