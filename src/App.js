import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/header'
import allMovies from './containers/allMovies';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <>
        <Header/>
        <Route path ='/movies' exact component={allMovies} />
        </>
      </HashRouter>
    );
  }
}

export default App;
