import { React, useState } from "react";
import "./App.css";
import { Login } from "./login";
import { Resgister } from "./register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Resgister onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
