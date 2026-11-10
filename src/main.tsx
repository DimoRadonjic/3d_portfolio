/* eslint-disable react-refresh/only-export-components */
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import React from 'react';

import ErrorBoundary from './components/ErrorBoundary';

const CrashFallback = () => (
  <div className='min-h-screen flex flex-col items-center justify-center gap-4 bg-primary text-white text-center px-6'>
    <h1 className='text-2xl font-bold'>Something went wrong.</h1>
    <p className='text-secondary'>The page hit an unexpected error.</p>
    <button
      type='button'
      onClick={() => window.location.reload()}
      className='bg-tertiary py-3 px-8 rounded-xl font-bold'
    >
      Reload
    </button>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<CrashFallback />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
