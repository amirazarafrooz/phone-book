import React from 'react';

export const Button = ({btnText,clickHandler }) => {
    return (
            <button onClick={clickHandler} className='genral__btn'>{btnText}</button>
    );
};

