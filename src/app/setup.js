
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App';

class AppRoot extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

export default AppRoot;
