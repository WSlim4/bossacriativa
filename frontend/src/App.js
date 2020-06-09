import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'
import { Provider } from 'react-redux'
import './config/ReactotronConfig'
import 'react-toastify/dist/ReactToastify.css'
import { store, persistor } from './store/index'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <ToastContainer autoClose={3000}/>
      </PersistGate>
    </Provider>
  );
}
export default App;

