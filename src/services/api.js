import axios from "axios";

/* eslint-disable */
class Api {
    constructor(endpoint) {
        this.base_url = 'http://localhost:5000';
        this.endpoint = endpoint
    }

    addHeader(name, value) {
        axios.defaults.headers.common[name] = value;
    }

    removeHeader(name) {
        delete axios.defaults.headers.common[name];
    }

    post(data, headers) {
        let url = `${this.base_url}${this.endpoint}`;
        let config = {};
        if (headers) {
            config.headers = headers;
        }

        return new Promise((resolve, reject) => {
            axios.post(url, data, config).then(resp => resolve(resp.data)).catch((err) => reject(err));
        });
    }
}

export default Api;
