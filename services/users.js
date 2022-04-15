import axios from 'axios';

export const getUsers = async () => {
  try {
    const dataUsers = await axios.get('https://fakestoreapi.com/users')
    return Promise.resolve(dataUsers)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getUser = async (id) => {
  try {
    const dataUser = await axios.get(`https://fakestoreapi.com/users/${id}`)
    return Promise.resolve(dataUser)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const deleteUser = async (id) => {
  try {
    const dataUser = await axios.delete(`https://fakestoreapi.com/users/${id}`)
    return Promise.resolve(dataUser)
  } catch (error) {
    return Promise.reject(error)
  }
}
