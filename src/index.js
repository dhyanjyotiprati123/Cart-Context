import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AppContext} from './Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <AppContext>
      <App />
    </AppContext>   
);

