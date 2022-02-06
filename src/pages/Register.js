import React, { Component } from 'react'
import { auth } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label>Full Name</label>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input className="form-control"/>
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input className="form-control" ref={(email) => this.email = email}/>
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input type="password" className="form-control" ref={(pw) => this.pw = pw} />
          </div>
          <div className="form-group">
            <label>Re-enter Password *</label>
            <input type="password" className="form-control" />
          </div>
          <div className='form-group'>
            * required<br/>
            <button className='signup-btn' type="submit" className="btn btn-primary" style={{width:"100%"}}>Sign up</button>
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          
        </form>
      </div>
    )
  }
}
