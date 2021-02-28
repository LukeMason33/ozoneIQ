import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('../../sw.js')
    .then((registration) => {
      console.log('SW Registered')
    })
}

serviceWorkerRegistration.register();


// if (window.caches) {
//   caches.open('pwa-v1.1').then((cache) => {
//     cache.addAll([
//       '/index.html',
//       '/index.css',
//       '/index.js',
//       'logo4.png',
//       'RB.png',
//       'LM.png',
//       'KB.png',
//       'location.svg'
//     ])
//   })
// } 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
