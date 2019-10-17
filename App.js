import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import './src/config/ReactotronConfig';

import Routes from './src/routes';

YellowBox.ignoreWarnings(['Accessing view manager configs']);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
