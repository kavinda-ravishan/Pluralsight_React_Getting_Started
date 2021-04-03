import React from "react";
import "./App.css";

const CardList = (props) => {
  return (
    <div>
      {props.profiles.map((profile, index) => (
        <Card {...profile} key={index} />
      ))}
    </div>
  );
};

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img alt="avatar" src={profile.avatar_url}></img>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}
//TEST USER NAME = gaearon
class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault(); //prevent refresh page when submit

    const res = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    );
    const jsonRes = await res.json();

    this.props.onSubmit(jsonRes);

    this.setState({ userName: "" }); //Reset user name value on input
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
