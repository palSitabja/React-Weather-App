import React from 'react';
import Header from '../components/Header'
import ForecastBody from '../components/ForecastBody'
import NewsBody from '../components/NewsBody'
import WeatherBody from '../components/WeatherBody'
import NotFoundPage from '../components/NotFoundPage'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
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
  );
  
  export default AppRouter;