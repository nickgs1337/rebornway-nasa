import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const Recommendation = ({ name, description, image }) => {
    return (
        <Card>
            <CardContent
                style={{
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        width: '50%',
                        paddingRight: '16px',
                    }}
                >
                    <div style={{
                        textAlign: 'center',
                        fontWeight: 800,
                        fontSize: '1.2em',
                        marginBottom: '16px',
                    }}>
                        {name}
                    </div>
                    <div
                        style={{
                            textAlign: 'justify',
                            textJustify: 'inter-word'
                        }}
                    >
                        {description}
                    </div>
                </div>
                <img
                    style={{
                        width: '50%'
                    }}
                    src={image} alt="" />
            </CardContent>
        </Card>
    );
};

export default Recommendation;