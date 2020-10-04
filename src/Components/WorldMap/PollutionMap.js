import React, {useState, useEffect} from 'react';
import Chart from "react-google-charts";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const PollutionMap = () => {

    let data =[['Country', 'Pollution Index'],
        ["Afghanistan", 93.47],
        ["Mongolia", 92.03],
        ["Myanmar", 91.58],
        ["Lebanon", 88.91],
        ["Ghana", 88.51],
        ["Nigeria", 86.89],
        ["Monaco", 86.53],
        ["Vietnam", 86.05],
        ["Bangladesh", 85.83],
        ["Nepal", 84.80],
        ["Egypt", 84.69],
        ["Peru", 83.34],
        ["North Macedonia", 80.23],
        ["China", 79.88],
        ["Ethiopia", 79.87],
        ["Chile", 79.74],
        ["India", 79.56],
        ["Albania", 78.24],
        ["Cambodia", 78.19],
        ["Laos", 78.00],
        ["Malta", 77.62],
        ["Jordan", 76.81],
        ["Iran", 76.69],
        ["Kenya", 76.56],
        ["Azerbaijan", 76.30],
        ["Dominican Republic", 75.72],
        ["Thailand", 75.26],
        ["Bolivia", 74.96],
        ["Philippines", 74.24],
        ["Venezuela", 73.87],
        ["Pakistan", 73.48],
        ["Guatemala", 73.04],
        ["Zimbabwe", 73.03],
        ["Iraq", 72.83],
        ["Kazakhstan", 72.10],
        ["Syria", 70.75],
        ["Georgia", 70.60],
        ["Bahrain", 70.58],
        ["Tunisia", 70.49],
        ["Morocco", 70.10],
        ["Jamaica", 68.25],
        ["Trinidad And Tobago", 67.99],
        ["Hong Kong", 67.60],
        ["Indonesia", 66.90],
        ["Kuwait", 66.37],
        ["Turkey", 66.22],
        ["Bulgaria", 65.43],
        ["Algeria", 65.32],
        ["Ukraine", 65.14],
        ["Saudi Arabia", 64.34],
        ["Tanzania", 63.98],
        ["Mexico", 63.29],
        ["Poland", 63.09],
        ["Taiwan", 63.08],
        ["Malaysia", 62.81],
        ["Russia", 62.58],
        ["Colombia", 62.44],
        ["South Korea", 62.25],
        ["Bosnia And Herzegovina", 61.72],
        ["Serbia", 61.21],
        ["Qatar", 60.41],
        ["Sri Lanka", 60.03],
        ["Armenia", 59.74],
        ["Panama", 59.03],
        ["Romania", 58.79],
        ["Israel", 57.48],
        ["South Africa", 57.12],
        ["Ecuador", 56.86],
        ["Mauritius", 56.19],
        ["Italy", 55.65],
        ["Cyprus", 55.11],
        ["Brazil", 54.67],
        ["Belgium", 53.66],
        ["Greece", 52.33],
        ["United Arab Emirates", 50.66],
        ["Argentina", 50.61],
        ["Puerto Rico", 50.06],
        ["Hungary", 48.66],
        ["Montenegro", 46.22],
        ["Costa Rica", 46.08],
        ["Uruguay", 45.80],
        ["France", 43.64],
        ["Belarus", 43.58],
        ["United Kingdom", 40.62],
        ["Spain", 40.37],
        ["Slovakia", 39.99],
        ["Czech Republic", 39.46],
        ["Japan", 39.34],
        ["United States", 38.17],
        ["Oman", 37.51],
        ["Ireland", 34.29],
        ["Latvia", 34.07],
        ["Singapore", 33.30],
        ["Portugal", 30.38],
        ["Croatia", 30.07],
        ["Germany", 29.28],
        ["Canada", 27.97],
        ["Lithuania", 27.91],
        ["Netherlands", 26.11],
        ["Luxembourg", 24.47],
        ["Slovenia", 23.53],
        ["New Zealand", 23.52],
        ["Australia", 23.22],
        ["Switzerland", 21.89],
        ["Austria", 21.65],
        ["Denmark", 21.52],
        ["Norway", 20.14],
        ["Sweden", 19.05],
        ["Estonia", 19.02],
        ["Iceland", 16.20],
        ["Finland", 11.79],];

    return (
        <Card>
            <CardContent>
                <Typography
                    style={{
                        textAlign: 'center'
                    }}
                    variant="h5" component="h2">
                    Cidades mais poluidas
                </Typography>
                <Chart
                    width={"100%"}
                    height={"50vh"}
                    chartType="GeoChart"
                    data={data}
                    options={{
                        colorAxis: {
                            minValue: 0,
                            maxValue: 100,
                            colors: ['#02cf00', '#d6ce0c', '#ab0000']
                        },
                    }}
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    mapsApiKey="AIzaSyDPD29xVHUzySFw8UdlfKitlWOQMrP1FQo"
                    rootProps={{ "data-testid": "1" }}
                />
            </CardContent>
        </Card>
    );
}

export default PollutionMap;
