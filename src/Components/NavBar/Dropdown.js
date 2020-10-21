import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import {Link} from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import NavBarItem from "./NavBarItem";

function Dropdown({ icon, title, items, multiSelect = false }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);
    Dropdown.handleClickOutside = () => setOpen(false);

    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            if (!multiSelect) {
                setSelection([item]);
            } else if (multiSelect) {
                setSelection([...selection, item]);
            }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval]);
        }
    }

    function isItemInSelection(item) {
        if (selection.some(current => current.id === item.id)) {
            return true;
        }
        return false;
    }

    return (<div style={{height: '100%'}}>

            <div
                style={{
                    display: 'flex',
                    cursor: 'pointer',
                    height: '100%',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    borderRight: '1px solid lightgrey',
                    textDecoration: 'none',
                    color: 'black',
                    position: 'relative'
                }}
                tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    {icon}
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        marginLeft: '8px'
                    }}
                >
                    {title}
                </div>
            </div>
            <div>
            {open && (
                <ul style={{
                    display: 'block',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    position: 'absolute',
                    backgroundColor: '#FFF',
                    padding: '0px',
                    margin: '0px',
                    marginTop: '1px'
                }}
                    onClick={() => toggle(!open)}
                >
                    {items.map(item => (
                        <Link to={item.route}
                              style={{
                                  display: 'flex',
                                  cursor: 'pointer',
                                  height: '100%',
                                  padding: '16px',
                                  textDecoration: 'none',
                                  color: 'black',
                                  borderBottom: '1px solid rgba(0,0,0,.125)',
                              }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center'
                                }}
                            >
                                {item.icon}
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    marginLeft: '8px',
                                }}
                            >
                                {item.title}
                            </div>
                        </Link>
                    ))}
                </ul>
            )}
            </div>
        </div>

    );
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);