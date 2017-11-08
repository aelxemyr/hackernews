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
      searchTerm: '',
    };
  }

  onDismiss = id => {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onSearchChange = event =>
    this.setState({ searchTerm: event.target.value });

  render() {
    const { header, searchTerm, list } = this.state;

    return (
      <div className="App">
        <h1>{header}</h1>
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
          Search:
        </Search>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

const Search = ({ value, onChange, children }) =>
  <form>
    {children} <input
      type="text"
      value={value}
      onChange={onChange}
    />
  </form>

const Table = ({ list, pattern, onDismiss }) => {

  const isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());

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
    <div>
      {list.filter(isSearched(pattern)).map(item =>
        <div>
          <ul key={item.objectID}>
            {listItem(item)}
          </ul>
          <Button onClick={() => onDismiss(item.objectID)}>
            Dismiss
          </Button>
        </div>
      )}
    </div>
  );
}

const Button = ({ onClick, className = '', children }) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

export default App;
