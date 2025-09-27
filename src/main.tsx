import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { TranslationProvider } from './lib/i18n';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')!).render(
  <TranslationProvider>
     <GoogleOAuthProvider clientId="345351483262-g32kfph89qvj1l9pds6bsicdmkgm4r9k.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>

  </TranslationProvider>
);
