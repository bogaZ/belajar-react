import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import Tombol from './button/index'
import List from './list/index'

const root = ReactDOM.createRoot(document.getElementById('root'));

var data = 100
let content;
if (data == 1000) {
  content = <Tombol />;
} else {
  content = <List />;
}

root.render(
  <React.StrictMode>
    <App />
    {/* {content} */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
