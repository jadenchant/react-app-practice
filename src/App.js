import './App.css';
import React from 'react';

function formatUser(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Jaden',
  lastName: 'Chant'
}

const welcome = (
  <h2>
    Nice to meet you!
  </h2>
);

class FirstTime extends React.Component {
  render() {
    let statement;
    if(this.props.isFirstTime) {
      statement = welcome;
    } else {
      statement = <h2>Welcome back</h2>
    }
    return statement;
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearImmediate(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <h4>It is {this.state.date.toLocaleTimeString()}</h4>
    )
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
    if(this.state == {isToggleOn: true}) {

    }
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


function App() {
  return (
    <div className="mainContainer">
      <h1>Hello, {formatUser(user)}!</h1>
      {/* To use Boolean Values true is present and false is omitted */}
      <FirstTime isFirstTime='true'></FirstTime>
      <Clock />
      <Toggle style={{color: 'red'}} />
    </div>
  );
}

export default App;
