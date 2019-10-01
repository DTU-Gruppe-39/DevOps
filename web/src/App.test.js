import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><App /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Silly test',()=>{
  expect(2+2).toBe(4);
})

it('renders welcome message', () => {
  const { getByText } = render(<HashRouter><App /></HashRouter>);
  expect(getByText('Learn React')).toBeInTheDocument();
});