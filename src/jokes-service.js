// Promise example
import axios from 'axios';
// const axios = require('axios');

const fetchJoke = async(url) => {
    try {
        const res = await axios.get(url)
        console.log(res.data);
        return res.data.value;
    } catch(error) {
        return error;
    }
}

export {
    fetchJoke
}