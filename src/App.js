/* eslint-disable no-unused-vars */

/* eslint-disable react/display-name */

import React, {useEffect,useState} from 'react'
import  {MovieRow}  from './componets/movieRow/MovieRow'
import tmDB from './utils/tmDB'
import './App.css'
import { FeaturedMovie } from './componets/featuredMovie/FeaturedMovie'



export default () => {

  const[movieList,setMovieList]=useState([])
  const[featuredData,setFeaturedData]=useState(null)


  useEffect(() => {
    const loadALL = async () => {
      const list = await tmDB.getHomeList();
      setMovieList(list)

      let originals =list.filter(i=>i.slug==='originals');
      let randomChoosen =Math.floor(Math.random()*(originals[0].items.results.length-1))
      let choosen =originals[0].items.results[randomChoosen];
      let choosenInfo =await tmDB.getMovieInfo(choosen.id,'tv')
      setFeaturedData(choosenInfo)
      console.log(choosenInfo)
    }

    loadALL()
},[])
  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData}/>}
      <section className="listas">
        {movieList.map((item,key)=>(
       
          
          <MovieRow key={key} title={item.title} items={item.items}/>

        ))}
      </section>
      
    </div>
  )
}

