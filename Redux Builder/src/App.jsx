// index.js or App.js

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";
import Theme from "./components/Theme";
import "./App.css"; // Make sure to import your styles

const App = () => (
  <Provider store={store}>
    <Theme />
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
