/**
 * @author Markitanov Vadim
 * @since 20.01.2023
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";

ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)