import './index.css';
import App from './app';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
