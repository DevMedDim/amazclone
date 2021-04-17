import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://localhost:5001/amaclone-d2e52/us-central1/api' // THE API URL (CLOUD FUNCTION)
});
export default instance;