import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider>
    <App />
    <Footer/>
  </Provider>
)
