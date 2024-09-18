import axios from 'axios'

const axiosInstance = await axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
})

async function getRequest(path) {
  const url = `${path}`
  try {
    const response = await axiosInstance.get(url)
    return response.data
  } catch (error) {
    console.error('Error making GET request:', error)
    throw error
  }
}

async function postRequest(path, data) {
  const url = `${path}`
  try {
    return await axios.post(url, data)
  } catch (error) {
    console.error('Error making POST request:', error)
    throw error
  }
}

async function putRequest(path, data) {
  const url = `${path}`
  try {
    return await axios.put(url, data)
  } catch (error) {
    console.error('Error making PUT request:', error)
    throw error
  }
}

async function patchRequest(path, data) {
  const url = `${path}`
  try {
    return await axios.patch(url, data)
  } catch (error) {
    console.error('Error making PATCH request:', error)
    throw error
  }
}

async function deleteRequest(path) {
  const url = `${path}`
  try {
    return await axios.delete(url)
  } catch (error) {
    console.error('Error making DELETE request:', error)
    throw error
  }
}

export default { getRequest, postRequest, putRequest, patchRequest, deleteRequest }
