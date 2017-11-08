import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const user = {
      firstName: 'Alex',
      lastName: 'Myers',
      userName: 'aelxemyr',
    };
    const printObject = (obj) => {
      Object.keys(obj).map(key => `My ${key} is ${obj[key]}`)
                      .reduce((acc, cur) => acc + "\n" + cur)
                      .toString()
    };
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{Object.keys(user).map(key => `my ${key} is ${user[key]}`)
          .reduce((acc, cur) => acc + " and " + cur)
          .toString()}</p>
      </div>
    );
  }
}

export default App;
