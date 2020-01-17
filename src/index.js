import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import './styles/scss/index.scss';
import rootReducer from './reducers';
import randomId from './components/randomId';

const INITIAL_STATE = {
  books: [
    { id: randomId(), title: 'Becoming', category: 'Biography' },
    { id: randomId(), title: 'The Very Hungry Caterpillar', category: 'Kids' },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
