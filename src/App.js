import React, { Component } from 'react';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import HomePage from './HomePage/HomePage';
import ErrorPage from './ErrorPage/ErrorPage';
import LoginPage from './LoginPage/LoginPage';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: '/',
      previousPage: null,
      user: ''
    };
  }

  updatePage(page) {
    this.setState({
      previousPage: this.state.page,
      page: page
    });
  }

  setUser(user) {
    this.setState({user: user});
  }

  navigator() {
    switch (this.state.page) {
      case '/':
        return <HomePage updatePage={this.updatePage.bind(this)} />
      case '/login':
        return <LoginPage updatePage={this.updatePage.bind(this)}
                setUser={this.setUser.bind(this)} />
      default:
        return <ErrorPage updatePage={this.updatePage.bind(this)} />
    }
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} setUser={this.setUser.bind(this)}/>
        {this.navigator()}
        <Footer />
      </div>
    );
  }
}

export default App;
