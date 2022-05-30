import axios, {
    AxiosInstance
} from "axios";

import {BASE_URL} from '@env';

export class AxiosInstace {
    private client: AxiosInstance
    constructor(
        protected acess_token: string
        ) {
        this.client = axios.create({
            baseURL:BASE_URL,
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${acess_token}`
            },
            responseType: 'json' as const,
            timeout: 10 * 1000,
        })
    }

    protected async post<TRequest, TResponse>(path: string, object: TRequest): Promise<TResponse> {
        try {
            const axiosResponse = await this.client.post<TResponse>(path, object);
            return axiosResponse.data
        } catch (error) {
           throw Error(`${error}`)
        }
    }

    protected async get<TResponse>(path: string): Promise<TResponse> {
        try {
            const axiosResponse = await this.client.get<TResponse>(path);
            return axiosResponse.data
        } catch (error) {
            throw Error(`${error}`)
        }
    }

    protected async put<TRequest, TResponse>(path: string, object: TRequest): Promise<TResponse> {
        try {
            const axiosResponse = await this.client.put<TResponse>(path, object);
            return axiosResponse.data
        } catch (error) {
            throw Error(`${error}`)
        }
    }

    protected async delete<TRequest>(path: string): Promise<TRequest> {
        try {
            const axiosResponse = await this.client.delete<TRequest>(path);
            return axiosResponse.data
        } catch (error) {
            throw Error(`${error}`)
        }
    }

}