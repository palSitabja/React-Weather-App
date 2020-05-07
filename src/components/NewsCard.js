import React from 'react'

const NewsCard=(props)=>{
    return(
        <div className="col-sm-3">
            <div className="card img-fluid">
                <img src={props.image} className="card-img-top" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="">{props.heading}</p>
                        <a href="#" className="btn-newsCard">Detail</a>
                    </div>
            </div>
        </div>
    )
}

export default NewsCard