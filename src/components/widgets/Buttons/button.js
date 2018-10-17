import React from 'react';
import { Link } from 'react-router-dom';
import styles from './button.css';

const Button = (props) => {
    let template = null;

    switch(props.type) {
        case "loadmore" :
            template = (
                <div 
                    className={styles.blue_btn}
                    onClick={props.loadMore}>
                    {props.cta}
                </div>
            )
            break;
        default: 
            template = null;
            break;
    }
    return template;
};

export default Button;