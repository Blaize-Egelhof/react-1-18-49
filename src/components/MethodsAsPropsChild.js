import React from 'react'

function UserMessage(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          <p>Welcome to the site, please complete the below:</p>
          <ol>
            <li>Newsletter</li>
            <li>Complete your profile</li>
            <li>Confirm your email</li>
          </ol>
          <button onClick={props.handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={props.handleSignIn}>Please Sign In</button>
        </div>
      )}
    </div>
  );
}

export default UserMessage