import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TranslationProvider } from './lib/i18n';

createRoot(document.getElementById('root')!).render(
  <TranslationProvider>
    <App />
  </TranslationProvider>
);
