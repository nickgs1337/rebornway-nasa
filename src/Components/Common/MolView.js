import React from 'react';
import Divider from "@material-ui/core/Divider";

const MolView = ({ cid, height, width }) => {
    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    zIndex: 100,
                    color: 'black',
                    textShadow: '0 1px 0 #ccc',
                    fontSize: '0.75em',
                }}
            >
                Use o scroll do mouse para aproximar do modelo<br/>
                Clique e arraste para mudar o angulo
            </div>
            <iframe style={{
                width,
                height
            }} frameBorder="0" src={"https://embed.molview.org/v1/?mode=balls&cid=" + cid + "&bg=white"}/>
        </div>
    );
};

export default MolView;