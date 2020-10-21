import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const FlipCard = ({ name, description, image }) => {
    const [flipped, setFlipped] = React.useState(false);

    return (
        <Card
            style={{
                height: '400px',
                position: 'relative',
                transition: 'all 1s ease',
                transformStyle: 'preserve-3d',
                transform: flipped ? 'rotateY(180deg)' : 'none',
                cursor: 'pointer'
            }}
            onClick={() => {
                setFlipped(!flipped)
            }}
        >
            <CardContent
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '100%',
                    position: 'absolute',
                    opacity: flipped ? 0 : 1
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

                <img
                    style={{
                        width: '80%',
                        alignItems: 'center',
                        alignContent: 'center'

                    }}
                    src={image} alt="" />

            </CardContent>
            <CardContent
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: '100%',

                    position: 'absolute',
                    transform: 'rotateY(180deg)',
                    opacity: flipped ? 1 : 0
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
                {description}
            </CardContent>
        </Card>
    );
};

export default FlipCard;