import React, {
  Component,
  Fragment
} from 'react';
import {
  GloabelStyle
} from './style.js';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';


class App extends Component {
  render() {
    return (
      <Fragment>
          <GloabelStyle/>
          <Provider store={store}>
              <Header/>
          </Provider>
      </Fragment>
    );
  }
}

export default App;