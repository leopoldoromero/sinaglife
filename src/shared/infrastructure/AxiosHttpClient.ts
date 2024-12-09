import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { environment } from '../constants';
import { getServerCookie } from 'actions/get-cookie.actions';

export type Response<T> = AxiosResponse<T>;
export type RequestConfig = InternalAxiosRequestConfig;
export class HttpError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export interface HttpClient {
  get<T>(url: string, config?: RequestConfig): Promise<T>;
  post<T, R>(url: string, data?: T, config?: RequestConfig): Promise<R>;
  put<T, R>(url: string, data?: T, config?: RequestConfig): Promise<R>;
  delete<T>(url: string, config?: RequestConfig): Promise<T>;
}

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

export class AxiosHttpClient implements HttpClient {
  private interceptors: number;
  private instance: AxiosInstance;
  private readonly BASE_URL: string = environment.API;
  private headers: { [key: string]: string } = {
    'Access-Control-Allow-Origin': environment.ORIGIN,
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: '0',
    'Content-Type': 'application/json',
  };

  public constructor() {
    this.instance = axios.create({
      baseURL: this.BASE_URL,
      headers: this.headers,
      withCredentials: true,
    });
    this.interceptors = 0;
    this._initializeResponseInterceptor();
    this.instance.interceptors.request.use(this._addJwt);
    this.instance.interceptors.request.use(this._addSessionId);
    this.instance.interceptors.request.use(this._handleRequest);
  }

  private _initializeResponseInterceptor = () => {
    this.interceptors = this.instance.interceptors.response.use(this._handleResponse, this._handleError);
  };

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config);
  }

  public async post<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.post(url, data, config);
  }

  public async put<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.put(url, data, config);
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete(url, config);
  }

  public async customRequest<T, R>(
    method: HttpMethod,
    url: string,
    config?: AxiosRequestConfig,
    data?: T,
  ): Promise<Response<R>> {
    this.instance.interceptors.response.eject(this.interceptors);
    const response = await this.instance[method](url, data, config);
    this._initializeResponseInterceptor();
    return response;
  }

  private _handleRequest = (data: any) => {
    return data;
  };

  private _handleResponse = ({ data }: AxiosResponse) => {
    return data;
  };

  private _addJwt = async (config: InternalAxiosRequestConfig) => {
    try {
      const tokenOrNull = await getServerCookie('jwt');
        config.headers = {
        ...config.headers,
        ...this.headers,
      } as AxiosRequestHeaders;
      if (tokenOrNull) {
        config.headers['authorization'] = `Bearer ${tokenOrNull}`
      }
      return config;
    } catch (error) {
      console.error('Error retrieving JWT:', error);
      return config; 
    }
  };

  private _addSessionId = async (config: InternalAxiosRequestConfig) => {
    const sessionId = await getServerCookie('sessionId');
    config.headers = {
      ...config.headers,
      ...this.headers,
    } as AxiosRequestHeaders;
    if (sessionId) {
      config.headers['sessionId'] =  sessionId;
    }
    return config;
  };

  protected _handleError = (error: AxiosError) => {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      console.error('No se ha podido establecer la conexion con el servidor.');
      return Promise.reject({message: 'No se ha podido establecer la conexion con el servidor.'});
    } else {
      console.error('Error de configuración de la solicitud:', error.message);
      return Promise.reject({message: 'Error de configuración de la solicitud'});
    }
  };
}
