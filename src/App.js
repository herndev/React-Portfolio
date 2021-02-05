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
            <div className="glass-card bg-white">
              <Nav />
            </div>

            <div className="glass-card mt-4 content bg-white">
              <Switch>
                {/* <Route path="/React-Portfolio/" exact component={Home} />
                <Route path="/React-Portfolio/resume" component={Resume} />
                <Route path="/React-Portfolio/portfolio" component={Portfolio} />
                <Route path="/React-Portfolio/blog" component={Blog} /> */}
                <Route path="/" exact component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/blog" component={Blog} />
              </Switch>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </Router >
  );
}

export default App;
