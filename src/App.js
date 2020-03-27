import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Navbar from './Component/Navbar'
import List from './Component/List'
import Detail from './Component/Detail'
import Action from './ActionCreater/action'
let { movie, show, reset } = Action;


class App extends React.Component {

  componentDidMount() {
    this.props.reset();
    this.props.movie(1);
    this.props.show(1);
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/'>
          <Redirect to='/movie' />
        </Route>
        <Route path='/movie'>
          <List type='movie' />
        </Route>
        <Route path='/show'>
          <List type='show' />
        </Route>
        <Route path='/detail'>
          <Detail />
        </Route>

      </BrowserRouter>
    );
  }
}

const take = (state) => {
  return {
    page: state.movie.page
  }
}

const change = (dispatch) => {
  return bindActionCreators({ movie, show, reset }, dispatch)
}

export default connect(take, change)(App);
