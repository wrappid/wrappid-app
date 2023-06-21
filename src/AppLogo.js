import {CoreImage} from '@wrappid/core';
import React from 'react';

export default function AppLogo() {
  return (
    <CoreImage
      src={require('./images/logo.png')}
      alt="Rxefy Logo"
      height={30}
      width={100}
    />
  );
}
