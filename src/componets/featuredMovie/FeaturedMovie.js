/* eslint-disable react/prop-types */
import React from 'react'
import './FeaturedMovie.css'

export const FeaturedMovie = ({item}) => {
    let firtsDate=new Date(item.first_air_date);
    let genres=[]
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }
    return (
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">
                    {item.name}
                    </div>
                    <div className="featured--info">
                        <div className="featured--points">
                            {item.vote_average} pontos
                        </div>
                        <div className="featured--year">
                            {firtsDate.getFullYear()}
                        </div>
                        <div className="features--season">
                            {item.number_of_seasons} temporada{item.number_of_seasons !=1? 's':''}
                        </div>
                        <div className="featured--description">
                            {item.overview}
                        </div>
                        <div className="featured--buttons">
                            <a href={`/watch/${item.id}`} className="featured--white-button"> ► Assistir</a>
                            <a href={`/lis/add/${item.id}`}className="featured-black-button"> + Minha Lista</a>
                        </div>
                        <div className="feature--generos">
                            <strong>Gêneros:</strong> {genres.join(', ')}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
