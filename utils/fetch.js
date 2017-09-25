import axios from 'axios'
import { toSnakeCase, toCamelCase } from './objectUtils'

const fetch = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
  transformRequest: [toSnakeCase],
  transformResponse: [JSON.parse, toCamelCase],
})

export default fetch
