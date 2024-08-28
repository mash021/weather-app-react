import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // فرض بر این است که فایل CSS برای استایل‌ها وجود دارد

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
