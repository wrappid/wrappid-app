import React from 'react';
import {CoreApp} from '@wrappid/core';
import {ComponentRegistry} from './ComponetRegistry';
import rootReducer from '../../../src/store/reducer';

function App() {
  return (
    <CoreApp
      reducers={rootReducer}
      componentRegistry={ComponentRegistry} />
  );
}

export default App;
