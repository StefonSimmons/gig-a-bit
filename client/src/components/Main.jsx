import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import FilterBar from './FilterBar'
import { getAllTopics } from '../services/topics'
import { postsUserTopic, createPost, updatePost, deletePost } from '../services/posts'
import Posts from './Posts'
import ProfilePosts from './ProfilePosts'

export default class Main extends Component {
  state = {
    topics: [],
    postsCopy: [],
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
    this.setState({
      posts: posts,
      postsCopy: posts
    })
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
  }

  updateOnePost = async (id, postInfo) => {
    const updatedPost = await updatePost(id, postInfo)
    this.setState(prevState => ({
      posts: prevState.posts.map(post => post.id === id ? updatedPost : post)
    }))
  }

  destroyPost = async (id) => {
    await deletePost(id);
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }))
  }

  reUpPosts = () => {
    this.setState(
      { posts: this.state.postsCopy }
    )
    console.log("reup?->", this.state.posts)
  }

  filterPosts = (topicID) => {
    this.reUpPosts()
    console.log("reupin called->", this.state.posts)

    const { posts } = this.state
    this.setState({
      posts: posts.filter(post => post.topic_id === topicID)
    })
  }

  render() {
    return (
      <div>
        {console.log("original->", this.state.posts)}
        {console.log("copy->", this.state.postsCopy)}
        <FilterBar
          topics={this.state.topics}
          filterPosts={this.filterPosts}
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
              updatePost={this.updateOnePost}
              deletePost={this.destroyPost}
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
