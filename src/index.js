import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// i18n
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import './locale/locale';

import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// import sagas
// import {Provider} from "react-redux";
// import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<Provider store={store}>*/}
          <I18nextProvider i18n={i18next}>
              <App/>
          </I18nextProvider>
      {/*</Provider>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
