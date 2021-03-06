import React from 'react'

const NewsCard=(props)=>{
    return(
        <div className="col-12 col-sm-6  col-md-6 col-xl-3 animate">
            <div className="card img-fluid">
                <img src={props.image?props.image:"/video/unknownNews.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="news-heading">{props.heading}</p>
                        <a href={props.link} className="btn btn-newsCard">Go &rarr;</a>
                    </div>
            </div>
        </div>
    )
}

export default NewsCard