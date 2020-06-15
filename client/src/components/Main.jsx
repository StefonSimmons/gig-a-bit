import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import FilterBar from './FilterBar'
import { getAllTopics } from '../services/topics'
import { postsUserTopic, createPost, updatePost, deletePost } from '../services/posts'
import Posts from './Posts'
import ProfilePosts from './ProfilePosts'

class Main extends Component {
  state = {
    topics: [],
    postsCopy: [],
    posts: [],
    // editBtnClicked: false,
    editPostID: null,
    message: null,
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
    this.setState(prevState => (
      {
        // editBtnClicked: !prevState.editBtnClicked,
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

  filterPosts = (topicID, topicName) => {
    this.setState(prevState => ({ posts: prevState.postsCopy }))
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.topic_id === topicID)
    }))
    this.setState(prevState => ({ message: prevState.posts.length === 0 ? `There are no posts related to ${topicName}` : null }))
  }

  getAllPosts = () => {
    this.setState(prevState => ({ posts: prevState.postsCopy }))
    this.setState({ message: null })
  }


  render() {

    return (
      <div>
        <FilterBar
          topics={this.state.topics}
          filterPosts={this.filterPosts}
          getAllPosts={this.getAllPosts}
        />
        <Switch>

          <Route exact path='/my_profile'>
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