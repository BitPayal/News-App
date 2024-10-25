import React, { useEffect, useState } from 'react'
import Content from './Content'; 

const Border = ({category}) => {
    const [articles,setArticle]=useState([])
    useEffect(()=>{
     let  url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

     fetch(url).then(response=>response.json()).then(data=>setArticle(data.articles));
    },[category])
  return (

    <div>
      <h2 className='text-center'>Latest<span className='badge text-bg-danger'>News</span></h2>
         {articles.map((news,index)=>{
             return <Content title={news.title} key={index} description={news.description} src={news.urlToImage} url={news.url} />
         })
                 
         }
    </div>
  )
}

export default Border
