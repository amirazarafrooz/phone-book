import React from 'react';

export const Button = ({btnText,clickHandler, cssClass }) => {
    return (
            <button onClick={clickHandler} className={cssClass}>{btnText}</button>
    );
};

