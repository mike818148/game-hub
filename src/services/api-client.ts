import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f2771ff0b7804b05879a1d056585e3e1'
    }
})

export { CanceledError };