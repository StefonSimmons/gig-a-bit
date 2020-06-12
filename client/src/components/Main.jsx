import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import FilterBar from './FilterBar'
import { getAllTopics } from '../services/topics'
import { postsUserTopic } from '../services/posts'
import Posts from './Posts'
import ProfilePosts from './ProfilePosts'

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
    const { loggedInUser } = this.props
    return (
      <div>
        <FilterBar
          topics={this.state.topics}
        />

        <Switch>
          <Route exact path="/myprofile">
            <ProfilePosts

            />
          </Route>

          <Route exact path="/">
            <Posts
              posts={this.state.posts}
            />
          </Route>
        </Switch>
      </div>
    )
  }
}
