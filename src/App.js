import React, { Component } from 'react';
import logo from './logo.svg';
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

const listItem = item => (
  <div>
    <li>
      <a href={item.url}>{item.title}</a>
    </li>
    <li>{item.author}</li>
    <li>{item.num_comments}</li>
    <li>{item.points}</li>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        {list.map(item =>
          <ul key={item.objectID}>
            {listItem(item)}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
