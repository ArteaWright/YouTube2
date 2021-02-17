import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
});


// Use these parameters as second paramter in get request. (Youtube.get...)
//  params: {
    // part: 'snippet',
    // maxResults: 10, 
    // key:'AIzaSyCpKezPHcvHg_zMutOUn_uuLbD97FWD_zg'