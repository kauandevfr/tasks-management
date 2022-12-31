import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://portifolio-back-end-production.up.railway.app',
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
})

export default instance;