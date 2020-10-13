import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCurrentThemesDark } from './redux/themes/themes.selectors';

import Header from './components/header/header.component.jsx';
import Homepage from './pages/homepage/homepage.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import NotFound from './pages/404/not-found.component.jsx';

import { GlobalStyles, LightThemesStyles, DarkThemesStyles } from './global.styles';

const App = ({ isCurrentThemesDark }) => {
  return (
    <>
      <GlobalStyles />
      {
        isCurrentThemesDark ? <DarkThemesStyles /> : <LightThemesStyles />
      }
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isCurrentThemesDark: selectIsCurrentThemesDark,
});

export default connect(mapStateToProps)(App);
