/* eslint-disable no-unused-vars */

/* eslint-disable react/display-name */

import React, {useEffect,useState} from 'react'
import  {MovieRow}  from './componets/MovieRow'
import tmDB from './utils/tmDB'
import './App.css'



export default () => {

  const[movieList,setMovieList]=useState([])


  useEffect(() => {
    const loadALL = async () => {
      const list = await tmDB.getHomeList();
      setMovieList(list)
    }

    loadALL()
},[])
  return (
    <div className="page">
      <section className="listas">
        {movieList.map((item,key)=>(
       
          
          <MovieRow key={key} title={item.title} items={item.items}/>

        ))}
      </section>
      
    </div>
  )
}

