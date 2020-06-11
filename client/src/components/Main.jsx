import React, { Component } from 'react'
import FilterBar from './FilterBar'
import { getAllTopics } from '../services/topics'
import { getAllPosts } from '../services/posts'
import { getUsersPostsTopics } from '../services/users'
import Posts from './Posts'

export default class Main extends Component {
  state = {
    topics: [],
    posts: [],
    userPosts: []
  }

  componentDidMount() {
    this.allTopics()
    this.allPosts()
    this.allUsersPosts()
  }

  allTopics = async () => {
    const topics = await getAllTopics();
    this.setState(
      { topics }
    )
  }
// DELETE ?
  allPosts = async () => {
    const posts = await getAllPosts();
    this.setState(
      { posts }
    )
  }
// DELETE ?
  
  allUsersPosts = async () => {
    const userPosts = await getUsersPostsTopics();
    this.setState(
      { userPosts }
    )
  }
  render() {

    return (
      <div>
        <FilterBar
          topics = {this.state.topics}
        />
        <Posts
          posts={this.state.posts}
          userPosts={this.state.userPosts}
        />
      </div>
    )
  }
}
