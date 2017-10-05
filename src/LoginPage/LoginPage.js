import React, {Component} from 'react';

export default class LoginPage extends Component {
  login(e) {
    var userBox = document.getElementById('username');
    var user = userBox.value.trim();
    if (user !== '' && user !== null) {
      this.props.setUser(user);
      userBox.value = '';
    }
  }

  keyUp(e) {
    if (e.keyCode === 13) {
      this.login();
    }
  }

  render() {
    return (
      <div>
        LOGINPAGE
        <br/>
        <input type='text' id='username' onKeyUp={this.keyUp.bind(this)}/>
        <button onClick={this.login.bind(this)}>LOGIN</button>
      </div>
    );
  }
}
