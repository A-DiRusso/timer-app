import React from 'react';
import './App.css';
import StartWatch from './StartWatch';
import StopWatch from './StopWatch';
import ResetWatch from './ResetWatch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 32,
      isOn: false,
      start: 0
    }
  }

  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h2>Timer App</h2>
            {
              this.state.time ? <h1>{this.state.time}</h1>
                              :
                              0
            }
            <StartWatch time={this.state.time} handleClick={this._startTime}/>
            <StopWatch handleClick={this._stopTime}/>
            <ResetWatch handleClick={this._resetTime}/>
        </header>
      </div>
    );
  }
  _startTime = () => {
    this.setState({
      time: 9
    })
  }
  _stopTime = () => {
    this.setState({
      time: 0
    })
  }
  _resetTime = () => {
    this.setState({
      time: 1000
    })
  }
  
}

export default App;
