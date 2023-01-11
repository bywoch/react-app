/* index.js는 입구 여러가지 전역적인 설정이 들어간 상태이다.*/
/* react는 사용자 정의 태그를 만드는 기술이다 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // "."의 의미는 현재 디렉토리를 의미한다 (App.js)
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
