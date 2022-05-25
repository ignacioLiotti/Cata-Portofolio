import axios from 'axios';
const instance = axios.create({
    baseURL: "https://notion-api.splitbee.io/v1/table",
});
export default instance;