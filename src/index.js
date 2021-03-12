import React from 'react';
import ReactDOM from 'react-dom';
// ex LIB
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { store } from './component/store/Central_Store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
