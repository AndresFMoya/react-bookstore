import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import rootReducer from './reducers';

const randomId = () => (Math.floor(Math.random() * (10 ** 6))).toString();

const INITIAL_STATE = {
  books: [
    { id: randomId(), title: 'Book # 1 Title', category: 'biography' },
    { id: randomId(), title: 'Book # 2 Title', category: 'kids' },
    { id: randomId(), title: 'Book # 3 Title', category: 'learning' },
  ],
};

const store = createStore(rootReducer, INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
