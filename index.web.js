import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Feather from 'react-native-vector-icons/Fonts/Feather.ttf';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

const IoniconsStyles = [
  `@font-face {
  src: url(${Feather});
  font-family: Feather;
}`,
  `@font-face {
  src: url(${Ionicons});
  font-family: Ionicons;
}`,
  `@font-face {
  src: url(${FontAwesome});
  font-family: FontAwesome;
}`,
];

const style = document.createElement('style');
style.type = 'text/css';

IoniconsStyles.forEach(element => {
  if (style.styleSheet) {
    style.styleSheet.cssText = element;
  } else {
    style.appendChild(document.createTextNode(element));
  }
});

document.head.appendChild(style);

if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
