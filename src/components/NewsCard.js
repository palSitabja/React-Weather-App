import React from 'react'

const NewsCard=()=>{
    return(
        <div className="col-sm-3 col-6">
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}

export default NewsCard