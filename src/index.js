/**
 * @author Markitanov Vadim
 * @since 20.01.2023
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import Button from "./Button";

ReactDom.render(
    <React.StrictMode>
        {/*<App/>*/}
        <Button/>
    </React.StrictMode>,
    document.getElementById('root')
)

module.exports = {
    Button
}