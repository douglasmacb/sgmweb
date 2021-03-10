import axios, { AxiosInstance } from 'axios'

export class ApiService {
  constructor (private readonly token: string | null = localStorage.getItem('token')) {}

  request = (): AxiosInstance => {
    return axios.create({
      baseURL: 'http://localhost:8080/camel/'
    })
  }
}

