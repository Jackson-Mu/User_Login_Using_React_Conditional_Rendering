import React from "react";

import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();
function renderConditionally() {}

function App() {
  return (
    <div className="container">
      {" "}
      {isLoggedIn ? <h1>Hey!!</h1> : <Login />}
      {currentTime > 12 ? (
        <h1>Why are you still working? Its time to rest!</h1>
      ) : (
        <h1>Continue Having a Productive Day!</h1>
      )}
    </div>
  );
}

export default App;
