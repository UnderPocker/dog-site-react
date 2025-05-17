import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DogProvider } from './context/DogContext';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DogProvider>
            <App />
        </DogProvider>
    </React.StrictMode>
);
