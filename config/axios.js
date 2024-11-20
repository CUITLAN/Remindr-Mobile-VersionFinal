import axios from 'axios';
const apiToken = process.env.REACT_APP_API_TOKEN;
const apiURL = process.env.REACT_APP_API_URL;

const clienteAxios = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
});

export default clienteAxios;