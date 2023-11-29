import axios from 'axios';

export const getAllComputers = () => {
    return axios.get('http://localhost:8000/computadoras/api/v1/computadoras/')
}

