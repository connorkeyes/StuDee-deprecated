import React from 'react';

const App = () => (
  <div>
    <h1>Your server is served B)</h1>
    <img src="https://ih0.redbubble.net/image.1005614632.3734/raf,360x360,075,t,fafafa:ca443f4786.jpg"></img>
    <h3>Login below, please!!</h3>
    <form method="POST" action='/login'>
      <input name="username" type="text" placeholder="username"></input>
      <input name="password" type="password" placeholder="password"></input>
      <input type='submit' value="login"></input>
    </form>
    <h3>Sign up</h3>
    <form method="POST" action='/signup'>
      <input name="username" type="text" placeholder="username"></input>
      <input name="password" type="password" placeholder="password"></input>
      <input type='submit' value="login"></input>
    </form>
  </div>
);

export default App;