import api from './apiConfig'

export const getUsersPostsTopics = async () => {
  const resp = await api.get('/users_posts_topics')
  const users = resp.data
  return users
}

export const getUsersTopicsPosts = async () => {
  const resp = await api.get('/users_topics_posts')
  const users = resp.data
  return users
}

