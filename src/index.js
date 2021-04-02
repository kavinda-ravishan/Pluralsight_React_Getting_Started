import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

function Button() {
  const [counter, setCounter] = useState(0); //init value 0 //Hook
  const handleClick = () => setCounter(counter + 1);

  return <button onClick={handleClick}>{counter}</button>;
}

function Display() {
  return <div>...</div>;
}

function App() {
  return (
    <div>
      <Button />
      <Display />
    </div>
  );
}

ReactDOM.render(
  //[<Button />, <Display />],
  //or
  //<><Button /><Display /></>,//Same as React.Fragment
  //or
  //<div><Button /><Display /></div>,
  <App />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
