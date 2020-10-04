import React from 'react';
import {Link} from "react-router-dom";

const NavBarItem = (props) => {
    return (
        <Link to={props.route}
            style={{
                display: 'flex',
                cursor: 'pointer',
                height: '100%',
                paddingLeft: '16px',
                paddingRight: '16px',
                borderRight: '1px solid lightgrey',
                textDecoration: 'none',
                color: 'black'
            }}
           {...props}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
            >
                {props.icon}
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginLeft: '8px'
                }}
            >
                {props.name}
            </div>
        </Link>
    );
};

export default NavBarItem;