import React, {Component} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import App from '../components/app/app';
import App2 from '../components/app2/app2'

 class Router extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={App}/>
          <Route path='/app2' component={App2}/>
        </Switch>
      </div>
    );
  }
}

export default Router;
