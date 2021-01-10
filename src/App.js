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
      <h3>It is {this.state.date.toLocaleTimeString()}</h3>
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
    }));
    if(this.state.isToggleOn) {
      console.log("Toggle On");
      
    } else {
      console.log("Toggle Off");
    }
  }

  render() {
    return (
      <div>
        <h3>Click For Surprise</h3>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A Number Was Submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          Number:
          <input type='text' value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <input type='submit' value="Submit" />
      </form>
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
      <Toggle />
      <NumberInput />
    </div>
  );
}

export default App;
