import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxResults: 15, 
        key:'AIzaSyAzJt1Bqbz2fgQZ1yGURlx5o1E0bCyy2mI'
    }
});

