import axios from 'axios';
const apiToken = process.env.REACT_APP_API_TOKEN;
const apiURL = process.env.REACT_APP_API_URL;

const clienteAxios = axios.create({
    baseURL:'http://192.168.100.102:8080/',
});

export default clienteAxios;