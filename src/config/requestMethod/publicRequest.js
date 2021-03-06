import axios from 'axios'
const { REACT_APP_DEV_BACKEND_URL, REACT_APP_PROD_BACKEND_URL, NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';
export const baseUrlDev = axios.create({
	baseURL: process.env.REACT_APP_DEV_BACKEND_URL || 'http://localhost:8200/api/',
});