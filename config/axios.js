import axios from 'axios';
const apiToken = process.env.REACT_APP_API_TOKEN;
const apiURL = process.env.REACT_APP_API_URL;

const clienteAxios = axios.create({
    baseURL:'https://remindr-app-732235378249.us-central1.run.app/',
});

export default clienteAxios;