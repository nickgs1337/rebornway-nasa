import React from 'react';
import {Link} from "react-router-dom";

const TextAndIcon = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                textDecoration: 'none',
                fontSize: '16px',
                marginLeft: '-5px'
            }}
           {...props}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'left'
                }}
            >
                {props.icon}
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'left'
                }}
            >
                {props.name}
            </div>
        </div>
    );
};

export default TextAndIcon;