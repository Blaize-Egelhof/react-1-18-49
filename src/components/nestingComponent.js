import React, { Component } from 'react'
import UserMessage from './userMessage'
import UserData from './userData'

export class NestingClass extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded : false,
       isLoggedIn : true
    }
  }

  render() {
    return (
      <div>
        < UserData isloaded ={this.state.isloaded} />
        < UserMessage isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }
}

export default NestingClass