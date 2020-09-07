import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Projects from './pages/projects/projects.component';
import Contact from './pages/contact/contact.component';
import Posts from './pages/posts/posts.component';
import OnTheWeb from './components/on-the-web/on-the-web.component';
import Footer from './components/footer/footer.component';

import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/posts' component={Posts} />
      </Switch>
      <OnTheWeb />
      <Footer />
    </div>
  );
};

export default App;
