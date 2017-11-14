import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Search, Button, Table } from './App';

Enzyme.configure({ adapter: new Adapter() });

const func = () => null;

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <App />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('Search', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Search onChange={func} onSubmit={func}>
        Search
      </Search>,
      div
    );
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Search onChange={func} onSubmit={func}>
        Search
      </Search>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('Button', () => {

  const text = 'Button';

  it('shows the correct text', () => {
    const element = shallow(
      <Button onClick={func}>{text}</Button>
    );
    expect(element.text()).toEqual('Button');
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button onClick={func}>Button</Button>, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Button onClick={func}>Button</Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('Table', () => {

  const props = {
    onDismiss: func,
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
    ],
  };

  it('shows two items in list', () => {
    const element = shallow(
      <Table { ...props } />
    );

    expect(element.find('.table-row').length).toBe(2);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table { ...props } />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Table { ...props } />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

})
