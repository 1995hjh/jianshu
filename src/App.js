import React, {
  Component,
  Fragment
} from 'react';
import {
  GloabelStyle
} from './style.js';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <Fragment>
          <GloabelStyle/>
          <Header/>
      </Fragment>
    );
  }
}

export default App;