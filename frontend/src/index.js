import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import './config/ReactotronConfig'
import 'react-toastify/dist/ReactToastify.css'
import { store, persistor } from './store/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <ToastContainer autoClose={3000}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);