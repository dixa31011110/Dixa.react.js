// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import Theme from './components/Theme';
// import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <Theme />
      <Counter />
    </Provider>
  );
};

export default App;
