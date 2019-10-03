/**
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';
import { store, persistor } from './src/reduxStore';
import { AppContainer } from './src/navigation/RootNavigator'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
