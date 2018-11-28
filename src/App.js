import React, {
  Component,
  Fragment
} from 'react';
import {
  GloabelStyle
} from './style.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Fragment>
          <GloabelStyle/>
          <Provider store={store}>
              <Fragment>
                <Header/>
                <BrowserRouter>
                    <Fragment>
                      <Route path='/' exact component={Home}></Route>
                      <Route path='/detail' exact component={Detail}></Route>
                    </Fragment>
                </BrowserRouter>
              </Fragment>
          </Provider>
      </Fragment>
    );
  }
}

export default App;