import React from 'react'
import { connect } from 'react-redux'
import {getTimezone} from 'countries-and-timezones'
import Header from '../components/Header'
import NewsCard from './NewsCard'
import CustomLoader from './CustomLoader'
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment'
import 'react-toastify/dist/ReactToastify.min.css';
toast.configure()
class NewsBody extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loading:true,
            news:""
        }
    }
    fetchNews=(topic,location)=>{
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const API_KEY='6e9ee8a5b6714a2f8bdc82d8365f7d05'

        const tenDaysBefore=moment().subtract(10,'d').format('YYYY-MM-DD')
        //console.log('Current date: '+tenDaysBefore);
        
        let url=topic?
        'https://newsapi.org/v2/everything?q='+topic+'&'+'from='+tenDaysBefore+'&sortBy=popularity&apiKey='+API_KEY
        :'https://newsapi.org/v2/top-headlines?country='+location+'&'+'apiKey='+API_KEY
        //console.log(proxyurl+url);
        
        fetch(proxyurl+url)
        .then((response)=>response.json())
        .then((data)=>{
            //console.log(data)
            if(data.totalResults===0){
                this.errorNotify()
            }
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
        //console.log('mounted: '+JSON.stringify(this.props.weather));
        
        //document.body.style.backgroundImage="url('/video/aerial-view-and-grayscale-photography-of-high-rise-buildings-1105766.jpg')"
        //document.body.style.backgroundAttachment='fixed'
        document.body.style.backgroundColor="#292929"
        document.body.style.backgroundSize='cover'
        document.body.style.backgroundRepeat='repeat'
        document.body.style.paddingTop='10rem'
        //document.getElementsByClassName('btn').
        //document.getElementsByClassName('btn').style.backgroundColor='#606060'
        if(this.props.weather.data!==""){
            //console.log("inside newsBody componentdidMount: "+getTimezone(this.props.weather.data.timezone).country)
            //console.log("inside newsBody componentdidMount: "+getTimezone("Asia/Kolkata").country)
            this.fetchNews(undefined,getTimezone(this.props.weather.data.timezone).country)
        }
    }
    errorNotify=()=>{
        toast.error('Currently No news On your Topic !',{autoClose:2000})
    }
    render(){
        return(
            <div>
            <Header fetchNews={this.fetchNews} renderedBy="NewsBody"/>
                <div className="container-fluid news-body">
                    <div className="row justify-content-center">
                    { 
                        this.state.loading
                        ?<CustomLoader renderer={"news"}/>
                        // :(this.state.news.totalResults===0?this.errorNotify()
                         :this.state.news.articles.map(element => {
                            return(
                            <NewsCard heading={element.title} link={element.url} key={element.url} image={element.urlToImage}/>
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
    
    return { 
        weather:state.wether_reducer
      }
  }
export default connect(
    mapStateToProps//,
    //{storeNewsSuccess}
)(NewsBody)