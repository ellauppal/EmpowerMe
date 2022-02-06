import React, { Component } from 'react'
import EmpowerPage from "../Empower/EmpowerPage.js";

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        Dashboard. This is a protected route. You can only see this if you're authed.
        <EmpowerPage/>
      </div>
    )
  }
}