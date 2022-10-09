import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

// Entry point for react to make any modifications
// root of your react application

const root = ReactDOM.createRoot(document.getElementById('root'));
//
// function tick() {
//     let time = new Date().toLocaleTimeString();
//
//     const element = (
//         <div>
//             <h1> Hello World !</h1>
//             <h2> Time now is {time} </h2>
//         </div>
//     )
//     root.render( element);
// }
//
// setInterval(tick,1000);

root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
