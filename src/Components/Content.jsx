import React from 'react'
import image from '../assets/News_images.png'

const Content = ({title,description,url,src}) => {
  return (
    <>
          <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{ maxWidth: "345px" }}>
  <img src={src?src:image} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title? title.slice(0, 50) : 'No Title Available'}</h5>
<p className="card-text">{description?description.slice(0, 90) : 'News related to this topic is not present'}</p>
    <a href={url} className="btn btn-primary">Read more..</a>
  </div>
    </div>
    </>
  )
}

export default Content
