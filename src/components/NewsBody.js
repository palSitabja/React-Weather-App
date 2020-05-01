import React from 'react'
import Header from '../components/Header'
import NewsCard from './NewsCard'
class NewsBody extends React.Component{

    componentDidMount(){
        console.log('mounted');
        
        document.body.style.backgroundImage="url('/video/aerial-view-and-grayscale-photography-of-high-rise-buildings-1105766.jpg')"
        document.body.style.backgroundSize='cover'
        document.body.style.backgroundRepeat='repeat'
        //document.getElementsByClassName('btn').
        //document.getElementsByClassName('btn').style.backgroundColor='#606060'
    }
    render(){
        return(
            <div>
            <Header/>
                <div className="container news-body">
                    <div className="row">
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>

                    </div>
                    
                </div>
            </div>
        )
    }
}
export default NewsBody