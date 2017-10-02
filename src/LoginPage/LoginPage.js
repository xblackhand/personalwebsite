import React, {Component} from 'react';

export default class LoginPage extends Component {
  login() {
    var user = document.getElementById('username').value.trim();
    if (user != '' && user != null) {
      console.log(user);
      this.props.setUser(user);
    }
  }

  render() {
    return (
      <div>
        LOGINPAGE
        <br/>
        <input type='text' id='username'/>
        <button onClick={this.login.bind(this)}>LOGIN</button>
      </div>
    );
  }
}
