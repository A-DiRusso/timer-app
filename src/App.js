import React from 'react';
import './App.css';
import StartWatch from './StartWatch';
import StopWatch from './StopWatch';
import ResetWatch from './ResetWatch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    }
  }

  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h2>Timer App</h2>
            <StartWatch />
            <StopWatch />
            <ResetWatch />
        </header>
      </div>
    );
  }
  
}

export default App;
