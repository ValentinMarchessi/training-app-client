import axios from 'axios'
export const baseUrlDev = axios.create({
	baseURL: process.env.REACT_APP_DEV_BACKEND_URL || 'http://localhost:8200/api/',
});