import React, { Component } from "react";
import { Provider } from 'react-redux';

import Dashboard from "./dashboard/dashboard-container";

import store from './root/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

export default App;
