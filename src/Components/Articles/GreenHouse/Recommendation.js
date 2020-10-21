import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import video_artic from "./videos/Annual_Arctic.mp4";
import ReactPlayer from "react-player";

const RecommendationVideo = ({ name, description, image }) => {
    return (
        <Card>
            <CardContent
                style={{
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '500px',
                        paddingRight: '16px',
                    }}
                >

                <div style={{
                    textAlign: 'center',
                    fontWeight: 800,
                    fontSize: '1.2em',
                    marginBottom: '10px',
                }}>
                    {name}
                </div>

                <div>
                    <center>
                    <ReactPlayer
                        controls={true}
                        width={"80%"}
                        height={"50%"}
                        playing={false}
                        pip={false}
                        muted={true}
                        url={image}
                        loop={false}/>
                    </center>
                </div>

                <p />

                <div
                    style={{
                        textAlign: 'justify',
                    }}
                >
                    {description}
                </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default RecommendationVideo;