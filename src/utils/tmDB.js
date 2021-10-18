const API_KEY='d7a7b9d8cf4c160d60fad162c3933b38';
const API_URL='https://api.themoviedb.org/3';


/**
     - originais da netflix
     -recomendados para voce
     - am alta
     - ação
     - comédia
     - terror
     - drama
     - romance
     - documentarios
     */

const basicFetch = async (endpoint)=>{
    const req= await fetch(`${API_URL}${endpoint}`);
    const json = await req.json();
    return json;

}    
    

export default{
    getHomeList: async ()=>{
        return[
            {
                slug:'originals',
                title:'Originais da Netflix',
                items:await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'recomendados para voce',
                items:[]

            },
            {
                slug:'toptraded',
                title:'Em alta',
                items:[]
            },
            {
                slug:'action',
                title:'Ação',
                items:[]
            },
            {
                slug:'comedy',
                title:'Comédia',
                items:[]
            },
            {
                slug:'terror',
                title:'Terror',
                items:[]
            },
            {
                slug:'drama',
                title:'Drama',
                items:[]
            },
            {
                slug:'romance',
                title:'Romance',
                items:[]
            },
            {
                slug:'documentary',
                title:'Documentário',
                items:[]
            },

        ]
    }
    


}