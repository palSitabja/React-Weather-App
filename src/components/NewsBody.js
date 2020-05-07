import React from 'react'
import { connect } from 'react-redux'
import {getTimezone} from 'countries-and-timezones'
import Header from '../components/Header'
import NewsCard from './NewsCard'
class NewsBody extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:true,
            news:""
        }
    }
    fetchNews=(topic,location)=>{
        const API_KEY='6e9ee8a5b6714a2f8bdc82d8365f7d05'
        let url=topic?
        'http://newsapi.org/v2/everything?q='+topic+'&'+'from=2020-05-04&sortBy=popularity&apiKey='+API_KEY
        :'http://newsapi.org/v2/top-headlines?country='+location+'&'+'apiKey='+API_KEY
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            //this.props.storeNewsSuccess(data)
            this.setState(()=>{
                return{
                    loading:false,
                    news:data
                }
            })
        })
    }
    componentDidMount(){
        console.log('mounted: '+JSON.stringify(this.props.weather));
        
        //document.body.style.backgroundImage="url('/video/aerial-view-and-grayscale-photography-of-high-rise-buildings-1105766.jpg')"
        //document.body.style.backgroundAttachment='fixed'
        document.body.style.backgroundColor="#292929"
        document.body.style.backgroundSize='cover'
        document.body.style.backgroundRepeat='repeat'
        //document.getElementsByClassName('btn').
        //document.getElementsByClassName('btn').style.backgroundColor='#606060'
        if(this.props.weather.data!==""){
            console.log("inside newsBody componentdidMount: "+getTimezone(this.props.weather.data.timezone).country)
            //console.log("inside newsBody componentdidMount: "+getTimezone("Asia/Kolkata").country)
            this.fetchNews(undefined,getTimezone(this.props.weather.data.timezone).country)
        }
    }
    render(){
        return(
            <div>
            <Header fetchNews={this.fetchNews} renderedBy="NewsBody"/>
                <div className="container news-body">
                    <div className="row">
                    { 
                        this.state.loading?<h1>Loading</h1>:
                        //{console.log("inside else: "+this.state.news.articles)}
                        this.state.news.articles.map(element => {
                            return(
                            <NewsCard heading={element.title} link={element.url} key={element.author} image={element.urlToImage}/>
                            )   
                        })
                    }
                    </div>
                    
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    
    return { 
        weather:state.wether_reducer
      }
  }
export default connect(
    mapStateToProps//,
    //{storeNewsSuccess}
)(NewsBody)