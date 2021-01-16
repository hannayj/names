/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = '/api/names'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
export default { getAll }