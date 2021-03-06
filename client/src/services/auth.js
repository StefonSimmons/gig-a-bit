import api from './apiConfig';

export const loginUser = async (loginParams) => {

  const resp = await api.post('/auth/login', { auth: loginParams })
  const token = resp.data.token
  const user = resp.data.user
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`
  return user
}

export const registerUser = async (registerParams) => {
  
  const resp = await api.post('/users', { user: registerParams })
  const token = resp.data.token
  const user = resp.data.user
  localStorage.setItem('authToken', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`
  return user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    const user = resp.data
    return user
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}