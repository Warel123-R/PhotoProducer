import axios from 'axios';

const searchImages = async(term) => {
    const response =await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID FJXGqT_nNPSCsbcQQ5OTSQdUyDz-1irsSisUQYD7OAM'
        },
        params:{
            query: term,
        }
    });
    return response.data.results;
};

export default searchImages;