import apiClient from "./api-client";

interface Entity {
    id: number;
    name: string;
}

class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T>(this.endpoint);
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

const create = (endpoint: string) => new HttpService(endpoint);

export default create;