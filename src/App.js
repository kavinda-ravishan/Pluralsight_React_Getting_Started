import React from "react";
import "./App.css";

/*
const App = ({ title }) => {
  return <div className="header">{title}</div>;
};
*/

class App extends React.Component {
  render() {
    return <div className="header">{this.props.title}</div>;
  }
}

export default App;
