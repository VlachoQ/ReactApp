import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//import { Service } from './components/Service';


import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from './reportWebVitals';    
import {Login} from './components/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        
        {/* <Login /> */}
        <App/>
    </React.StrictMode>
);
//reportWebVitals();