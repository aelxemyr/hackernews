import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'This is the Title',
      list,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  render() {
    const listItem = item => (
      <div>
        <li>
          <a href={item.url}>{item.title}</a>
        </li>
        <li>{item.author}</li>
        <li>{item.num_comments}</li>
        <li>{item.points}</li>
      </div>
    );

    return (
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>{this.state.header}</h1>
        {this.state.list.map(item => (
          <div>
            <ul key={item.objectID}>
              {listItem(item)}
            </ul>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
                Dismiss
              </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
