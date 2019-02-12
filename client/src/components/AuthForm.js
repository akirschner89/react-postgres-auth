import React , { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

class AuthForm extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <div>
        <h2>Foodie Hub</h2>
        <FormGroup>
          <FormControl
          type='text'
          value={this.state.username}
          placeholder='username'
          />
          <br/>
          <FormControl
          type='password'
          value={this.state.password}
          placeholder='password'
          />
        </FormGroup>
        <Button>Log In</Button>
        <span> or </span>
        <Button>Sign Up</Button>
      </div>
    )
  }
}

export default AuthForm