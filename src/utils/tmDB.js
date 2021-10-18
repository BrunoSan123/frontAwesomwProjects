


const API_KEY = 'd7a7b9d8cf4c160d60fad162c3933b38',
 API_URL = 'https://api.themoviedb.org/3',


/**
 *   - originais da netflix
 *   -recomendados para voce
 *   - am alta
 *   - ação
 *   - comédia
 *   - terror
 *   - drama
 *   - romance
 *   - documentarios
 */

 basicFetch = async (endpoint) => {
    const req = await fetch(`${API_URL}${endpoint}`),
     json = await req.json();
    return json;

}    
    

export default {
    'getHomeList': async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'recomendados para voce',
                items: await basicFetch(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)

            },
            {
                slug: 'toptraded',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'terror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                items: await basicFetch(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }

        ]
    }


}
