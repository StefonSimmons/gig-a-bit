import React, { Component } from 'react'
import FilterBar from './FilterBar'
import { getAllTopics } from '../services/topics'
import { postsUserTopic } from '../services/posts'
import Posts from './Posts'

export default class Main extends Component {
  state = {
    topics: [],
    posts: [],
  }

  componentDidMount() {
    this.allTopics()
    this.allPosts()
  }

  allTopics = async () => {
    const topics = await getAllTopics();
    this.setState(
      { topics }
    )
  }

  allPosts = async () => {
    const posts = await postsUserTopic()
    this.setState(
      { posts }
    )
  }


  render() {

    return (
      <div>
        <FilterBar
          topics={this.state.topics}
        />
        <Posts
          posts={this.state.posts}
        />
      </div>
    )
  }
}
