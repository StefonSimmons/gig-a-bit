import api from './apiConfig'

export const getAllTopics = async () => {
  const resp = await api.get('/topics')
  const topics = resp.data
  return topics
}

export const getTopicsPosts = async () => {
  const resp = await api.get('/topics_posts')
  const topics = resp.data
  return topics
}