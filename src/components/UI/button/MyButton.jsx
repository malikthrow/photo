import React from 'react';
import classes from './MyButton.module.css'; //стиль как свойство обьекта

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;