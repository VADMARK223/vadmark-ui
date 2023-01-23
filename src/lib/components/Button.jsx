/**
 * @author Markitanov Vadim
 * @since 23.01.2023
 */
import React from 'react';

const Button = (props) => {
    return (
        <button className={'btn'}>
            <h4>
                {props.label}
            </h4>
        </button>
    );
};

export default Button;