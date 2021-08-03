import React from "react";
import "./app.scss";
import logo from "./img/logo.png";

const App = () => {
  return (
    <div className="app">
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        sequi obcaecati voluptatibus nisi? Libero nihil eaque unde vel ipsum.
        Ullam odit quisquam molestiae nemo est exercitationem eveniet accusamus
        doloribus corporis.
      </h1>
      <img className="app__img" src={logo} alt="react" />
    </div>
  );
};

export default App;
