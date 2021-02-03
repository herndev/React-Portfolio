import React from 'react';
import './App.css';
import Nav from './components/nav';
import SideBar from './components/sidebar';
import ContactForm from './components/contactform';
import Home from './pages/home';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Blog from './pages/blog';

function App() {
  return (
    <Router>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <SideBar />
            <ContactForm />
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="glass-card">
              <Nav />
            </div>

            <div className="glass-card mt-4 content">
              <Switch>
                <Route path="/React-Portfolio/" exact component={Home} />
                <Route path="/React-Portfolio/resume" component={Resume} />
                <Route path="/React-Portfolio/portfolio" component={Portfolio} />
                <Route path="/React-Portfolio/blog" component={Blog} />
              </Switch>
            </div>

            <Footer />
          </div>
        </div>
      </div>
      {/* <div className="App">
            <Nav />
        <Switch>
                <Route path="/about" exact component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div> */}
    </Router >
  );
}

export default App;
