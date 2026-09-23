
const axios = require('axios');

async function searchMovies(req, res) {
  try {
    const { title } = req.query;

    if (!title) {
        return res.status(400).json({ error: 'Title query parameter is required' });
    }

    const response = await axios.get('http://www.omdbapi.com/', { 
        params: { 
            s: title, 
            apikey: process.env.OMDB_API_KEY 
        } 
    })

    
    res.json(response.data);
  } catch(error) {
    console.error(error);
    res.status(500).json({ message: error.message })
  }
}



async function getMovieDetails(req, res) {
    try {
        const { id } = req.params;
        const response = await axios.get('http://www.omdbapi.com/', { 
            params: { 
                i: id, 
                apikey: process.env.OMDB_API_KEY 
            } 
        });
        res.json(response.data);
    } catch(error) {
        console.error(error);
    res.status(500).json({ message: error.message })
    }
}





module.exports = {
    searchMovies,
    getMovieDetails,
};