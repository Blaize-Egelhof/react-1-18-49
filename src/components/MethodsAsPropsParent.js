import React, { Component } from 'react'
import UserMessage from './MethodsAsPropsChild'
import UserData from './userData'

export class ParentPropsClass extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded : false ,
       isLoggedIn : false
    }
  }

  handleSignIn = () => {
    this.setState({
      isLoggedIn: true, 
    })
    console.log(this)
  }

  handleSignOut = () => {
    this.setState({
      isLoggedIn: false, 
    })
    console.log(this)
  }

  render() {
    return (
      <div>
        < UserMessage 
        isLoggedIn={this.state.isLoggedIn}
        handleSignIn={this.handleSignIn}
        handleSignOut={this.handleSignOut}
        />
      </div>
    )
  }
}

export default ParentPropsClass