import React, {
  Component,
  Fragment
} from 'react';
import {
  GloabelStyle,
  BackTop
} from './style';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backTopDisplay: false
    }
  }

  componentDidMount() {
    this.bindEvents();
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  bindEvents() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
      if (document.documentElement.scrollTop < 100) {
        this.setState({
          backTopDisplay: false
        });
      } else {
        this.setState({
          backTopDisplay: true
        });
      }
  }

  handleBackTop() {
    window.scrollTo(0, 0);
  }

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
                {this.state.backTopDisplay && <BackTop onClick={this.handleBackTop}><i className="icon iconfont">&#xe81b;</i></BackTop>}
              </Fragment>
          </Provider>
      </Fragment>
    );
  }
}

export default App;