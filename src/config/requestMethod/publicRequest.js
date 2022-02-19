import axios from 'axios'

export const baseUrlDev = axios.create({
    baseURL: 'http://localhost:8200/api/'
})