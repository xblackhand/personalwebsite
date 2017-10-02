import React, { Component } from 'react';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import HomePage from './HomePage/HomePage';
import ErrorPage from './ErrorPage/ErrorPage';
import LoginPage from './LoginPage/LoginPage';
import ContactPage from './ContactPage/ContactPage';
import BlogPage from './BlogPage/BlogPage';
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

  logOut() {
    this.setState({user: null});
  }

  navigator() {
    switch (this.state.page) {
      case '/':
        return <HomePage updatePage={this.updatePage.bind(this)} />
      case '/blog':
        return <BlogPage updatePage={this.updatePage.bind(this)} />
      case '/contact':
        return <ContactPage updatePage={this.updatePage.bind(this)} />
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
        <Header user={this.state.user} setUser={this.setUser.bind(this)}
         updatePage={this.updatePage.bind(this)} logOut={this.logOut.bind(this)}/>
        <div className='body'>
          {this.navigator()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
