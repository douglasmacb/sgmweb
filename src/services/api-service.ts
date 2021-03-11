import axios, { AxiosInstance } from 'axios'

export interface ApiResponse {
  data: any
  error?: any
}

export class ApiService {

  private fetchApi: AxiosInstance
  private fetchPublicApi: AxiosInstance

  constructor() {
    this.fetchPublicApi = axios.create({ 
      headers: {
      },
      baseURL: 'http://localhost:8080/camel/' 
    })
    
    this.fetchApi = axios.create({ 
      headers: {
        Authorization: `Bearer ${this.getToken()}`
      },
      baseURL: 'http://localhost:8080/camel/'
    })
  }

  post = async (path: string, body: any): Promise<ApiResponse> => {
    return this.fetchPublicApi.post(path, body)
  }

  get = async (path: string): Promise<ApiResponse> => {
    return this.fetchPublicApi.get(path)
  }

  put = async (path: string, body: any): Promise<ApiResponse> => {
    return this.fetchPublicApi.put(path, body)
  }

  delete = async (path: string): Promise<ApiResponse> => {
    return this.fetchPublicApi.delete(path)
  }

  private getToken = (): string | null => {
    return localStorage.getItem('token')
  }
}

