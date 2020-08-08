import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://quiz-59454.firebaseio.com'
});

export default axiosInstance;