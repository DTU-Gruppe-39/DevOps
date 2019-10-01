import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from "react-router-dom";
import { render, fireEvent } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><App /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Silly test',()=>{
  expect(2+2).toBe(4);
});

test('loads items eventually', async () => {
  const { getByText } = render(<HashRouter><App /></HashRouter>);

  // Click button
  fireEvent.click(getByText('Tilføj giraf'));

  // Wait for page to update with query text
  const items = await getByText("Rasmus");
  expect(items).toBeInTheDocument();
});

it('renders welcome message', () => {
  const { getByText } = render(<HashRouter><App /></HashRouter>);
  expect(getByText('Learn React')).toBeInTheDocument();
});