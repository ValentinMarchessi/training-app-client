import axios from 'axios'
export const baseUrlDev = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL || 'https://back-app-training.herokuapp.com/api'
});