import React from 'react';
import css from './css/sidebar.module.css'

class NavBarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

   handleclick = () => {
    this.setState({isLoggedIn: true})
    console.log(this)
  }

  render() {
    return (
        this.state.isLoggedIn ? (
            <div className={css.navBar}>
            <form>
              <label htmlFor="username">Username:</label>
              <input id="username" type="text" name="username" />
      
              <label htmlFor="password">Password:</label>
              <input id="password" type="password" name="password" />
      
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
            <div className={css.navBar}>
                <h1>My Gallery</h1>
                <button onClick={this.handleclick}>Log Out</button>  
            </div>

        )
      );
      
  }
}

export default NavBarForm;
