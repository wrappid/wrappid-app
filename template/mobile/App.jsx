import React from 'react';
import {ComponentRegistryContext, CoreApp} from '@wrappid/core';
import {ComponentRegistry} from './src/ComponetRegistry';

function App() {
  return (
    <ComponentRegistryContext.Provider value={ComponentRegistry}>
      <CoreApp />
    </ComponentRegistryContext.Provider>
  );
}

export default App;
