import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/tokens.css';
import './styles/global.css';
import './styles/app.css';
import './styles/navigation.css';
import './styles/home.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/case-study.css';
import './styles/contact.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
