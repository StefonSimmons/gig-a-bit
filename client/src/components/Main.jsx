import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { postsUserTopic, createPost, updatePost, deletePost } from '../services/posts'
import { getAllTopics } from '../services/topics'
import FilterBar from './FilterBar'
import Posts from './Posts'
import ProfilePosts from './ProfilePosts'

class Main extends Component {
  state = {
    topics: [],
    postsCopy: [],
    posts: [],
    editPostID: null,
    message: null,
  }

  // loads all topics and posts upon component rendering 
  componentDidMount() {
    this.listAllTopics()
    this.listAllPosts()
  }

  //SHOW ALL CALLS 
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

  // CREATE, UPDATE, DESTROY CALLS - posts
  createNewPost = async (postInfo) => {
    const newPost = await createPost(postInfo)
    this.setState(prevState => (
      { posts: [...prevState.posts, newPost] }
    ))
  }

  showUpdatePostForm = (postID) => {
    this.setState(
      { editPostID: postID }
    )
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

  // FILTER AND RELOAD FOR FILTERING
  filterPosts = (topicID, topicName) => {
    this.setState(prevState => ({
      posts: prevState.postsCopy
    }))
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.topic_id === topicID)
    }))
    this.setState(prevState => ({
      message: prevState.posts.length === 0 ? `There are no posts related to ${topicName}` : null
    }))
  }

  reloadAllPosts = () => {
    this.setState(prevState => ({ posts: prevState.postsCopy }))
    this.setState({ message: null })
  }


  render() {

    return (
      <div>
        <FilterBar
          topics={this.state.topics}
          filterPosts={this.filterPosts}
          reloadAllPosts={this.reloadAllPosts}
        />
        <Switch>

          <Route exact path='/my_profile'>
            <ProfilePosts
              loggedInUser={this.props.loggedInUser}
              posts={this.state.posts}
              createNewPost={this.createNewPost}
              topics={this.state.topics}
              showUpdatePostForm={this.showUpdatePostForm}
              editPostID={this.state.editPostID}
              updatePost={this.updateOnePost}
              deletePost={this.destroyPost}
              noPostsMsg={this.state.message}
            />
          </Route>

          <Route exact path="/">
            <Posts
              posts={this.state.posts}
              noPostsMsg={this.state.message}
            />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main)