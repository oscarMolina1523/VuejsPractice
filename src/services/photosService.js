import axiosInstance from '../repositories/Api'

async function getApi() {
  try {
    const response = await axiosInstance.getRequest('/photos/?_limit=12')
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

async function postApi(data) {
  try {
    const response = await axiosInstance.postRequest('/photos', data)
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

async function putApi(id, data) {
  try {
    const response = await axiosInstance.putRequest(`/photos/${id}`, data)
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

async function patchApi(id, data) {
  try {
    const response = await axiosInstance.patchRequest(`/photos/${id}`, data)
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

async function deleteApi(id) {
  try {
    const response = await axiosInstance.deleteRequest(`/photos/${id}`)
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

export default { getApi, postApi, putApi, patchApi, deleteApi }
