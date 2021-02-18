import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxResults: 15, 
        key:'AIzaSyCpKezPHcvHg_zMutOUn_uuLbD97FWD_zg'
    }
});


