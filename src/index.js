import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastProvider } from 'react-toast-notifications';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './redux/store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-right">
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </ToastProvider>
  </React.StrictMode>
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*

  */