import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

interface Entity {
    id: number;
    name: string;
}

class HttpService {
    endpoint: string;
    requestConfig?: AxiosRequestConfig;

    constructor(endpoint: string, requestConfig?: AxiosRequestConfig) {
        this.endpoint = endpoint;
        this.requestConfig = requestConfig;
    }

    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T>(this.endpoint, {signal: controller.signal, ...this.requestConfig});
        return { request, cancel: () => controller.abort() };
    }

    get(id: number) {
        return apiClient.get(this.endpoint + '/' + id);
    }

    create<T>(entity: T) {
        return apiClient.post(this.endpoint, entity);
    }

    update<T extends Entity>(entity: T) {
        return apiClient.patch(this.endpoint + '/', entity);
    }

    delete(id: number) {
        return apiClient.delete(this.endpoint + '/' + id);
    }
}

const create = (endpoint: string, requestConfig?: AxiosRequestConfig) => new HttpService(endpoint, requestConfig);

export default create;