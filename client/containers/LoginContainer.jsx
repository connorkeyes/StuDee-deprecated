import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
// import from child components...

const LoginContainer = () => {
  // add pertinent state here

  return (
    <div className="container">
      <div className="outerBox">
        <h1 id="title">StuDee</h1>
        <LoginForm/>
      </div>
    </div>
  );
};

export default LoginContainer;