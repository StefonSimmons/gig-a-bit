import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import FilterBar from './FilterBar'
import { getAllTopics } from '../services/topics'
import { postsUserTopic, createPost } from '../services/posts'
import Posts from './Posts'
import ProfilePosts from './ProfilePosts'

export default class Main extends Component {
  state = {
    topics: [],
    posts: [],
    editBtnClicked: false,
    editPostID: null
  }

  componentDidMount() {
    this.listAllTopics()
    this.listAllPosts()
  }

  listAllTopics = async () => {
    const topics = await getAllTopics();
    this.setState(
      { topics }
    )
  }

  listAllPosts = async () => {
    const posts = await postsUserTopic()
    this.setState(
      { posts }
    )
  }

  createNewPost = async (postInfo) => {
    const newPost = await createPost(postInfo)
    this.setState(prevState => (
      { posts: [...prevState.posts, newPost] }
    ))
  }

  toggleUpdatePostForm = (postID) => {
    console.log(postID)
    this.setState(prevState => (
      {
        editBtnClicked: !prevState.editBtnClicked,
        editPostID: postID
      }
    ))
    // this.getPostID(e)
  }

  // getPostID = (e) => {
  //   const postID = e.target.value !== undefined ? e.target.value : 'loading'
  //   console.log(postID)
  //   this.setState(
  //     {editPostID: postID }
  //   )
  // }
  
  render() {
    return (
      <div>
        <FilterBar
          topics={this.state.topics}
        />

        <Switch>
          <Route exact path="/my_profile">
            <ProfilePosts
              loggedInUser={this.props.loggedInUser}
              posts={this.state.posts}
              createNewPost={this.createNewPost}
              topics={this.state.topics}
              showUpdatePostForm={this.toggleUpdatePostForm}
              editBtnClicked={this.state.editBtnClicked}
              editPostID={this.state.editPostID}
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
