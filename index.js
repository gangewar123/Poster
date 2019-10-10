/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './component/home'

AppRegistry.registerComponent(appName, () => Home);
