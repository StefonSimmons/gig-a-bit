import React, { Component } from 'react'
import FilterBar from './FilterBar'
import { getAllTopics } from '../services/topics'

export default class Main extends Component {
  state = {
    topics: []
  }

  componentDidMount() {
    this.Topics()
  }

  Topics = async () => {
    const topics = await getAllTopics();
    this.setState(
      { topics }
    )
  }


  render() {

    return (
      <div>
        <FilterBar
          topics = {this.state.topics}
        />
      </div>
    )
  }
}
