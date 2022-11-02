import { createAxiosInstance } from "./helper";
import { stringify } from 'qs';

class APIService {
    constructor() {
        // Initialise Axios
        this.api = createAxiosInstance();
    }

    getHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('x-access-token')}`
        };
    }

    rawPost(route, body) {
        return this.api.post(route, body);
    }

    post(route, body) {
        const headers = this.getHeaders();
        return this.api.post(route, body, { headers });
    }

    getById(route, id) {
        const headers = this.getHeaders();
        const url = `${route}/${id}`;
        return this.api.get(url, { headers });
    }

    get(route, query = {}) {
        const headers = this.getHeaders();
        const url = `${route}?${stringify(query)}`;
        return this.api.get(url, { headers });
    }

    update(route, query = {}, payload) {
        const headers = this.getHeaders();
        const url = `${route}?${stringify(query)}`;
        return this.api.put(url, payload, { headers });
    }

    put(route, payload) {
        const headers = this.getHeaders();
        return this.api.put(route, payload, { headers });
    }

    updateById(route, id, payload) {
        const headers = this.getHeaders();
        const url = `${route}/${id}`;
        return this.api.put(url, payload, { headers });
    }

    patch(route, payload) {
        const headers = this.getHeaders();
        return this.api.patch(route, payload, { headers });
    }

    delete(route, id) {
        const headers = this.getHeaders();
        const url = `${route}/${id}`;
        return this.api.delete(url, { headers });
    }
}

export default new APIService();