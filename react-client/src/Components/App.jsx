import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import Modal from './Widgets/Modal';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Header from './HeaderComponent/Header';
import Footer from './FooterComponent/Footer';
import { Provider } from 'react-redux';
import store from '../store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Modal />
            <Route name="home" exact path="/" component={Home} />
            <Route name="analysis" path="/recipes" component={Recipes} />
            <Route name="blog" path="/blog" component={Blog} />
            <Route name="about" path="/about" component={About} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App;
