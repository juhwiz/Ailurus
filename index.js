import { registerRootComponent } from 'expo';

import App from './screens/Inicial';
//import TelaCadastro from './screens/Cadastro';
//import TelaLogin from './screens/Login';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
