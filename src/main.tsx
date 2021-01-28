import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from './routes/privateRouter'
import App from './components/app'
import Signin from './components/signin';
import store from './store/index'

import firebase from 'firebase/app';
import { firebaseConfig } from "../config";

import 'semantic-ui-css/semantic.min.css'

firebase.initializeApp(firebaseConfig);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
          <PrivateRoute exact path="/" component={App} />
          <Route exact path="/signin" component={Signin} />
          <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

export default store
