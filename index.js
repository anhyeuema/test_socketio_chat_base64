/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => test);

import App from './Components/App';

import React, {Component} from 'react';


export default class test extends Component {
  render() {
    return (
     < App />
    );
  }
}