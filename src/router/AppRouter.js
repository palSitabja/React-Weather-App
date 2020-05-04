import React from 'react';
import ForecastBody from '../components/ForecastBody'
import NewsBody from '../components/NewsBody'
import { Provider } from 'react-redux'
import store from '../redux/store'
import WeatherBody from '../components/WeatherBody'
import NotFoundPage from '../components/NotFoundPage'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

class AppRouter extends React.Component{
  
  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={WeatherBody} exact={true} />
            <Route path="/forecast" component={ForecastBody} />
            <Route path="/news" component={NewsBody} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
      </Provider>
    )
  }
}
  
export default AppRouter;