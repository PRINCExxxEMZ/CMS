import React from "react";
import ReactDom from 'react-router-dom';
import './App.css'
import './App'


const root = ReactDom.createBrowserRouter(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        </React.StrictMode>
);