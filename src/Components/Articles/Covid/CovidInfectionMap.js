import React, {useState, useEffect} from 'react';
import Chart from "react-google-charts";


const CovidInfectionMap = () => {

    const [data, setData] = useState([["Country", "Infections"]]);

    useEffect(() => {
        fetch("https://api.covid19api.com/summary")
            .then((response) => response.json())
            .then(data => {
                let newData = [["Country", "Infections"]];
                for(let country of data.Countries) {
                    newData.push([country.Country, country.TotalConfirmed])
                }
                setData(newData);
            })
    }, []);


    return (
        <Chart
            width={"100%"}
            height={"50vh"}
            chartType="GeoChart"
            data={data}
            options={{
                colorAxis: {
                    minValue: 0,
                    colors: ['#FFFFFF', '#FF0000']
                }
            }}
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            mapsApiKey="AIzaSyDPD29xVHUzySFw8UdlfKitlWOQMrP1FQo"
            rootProps={{ "data-testid": "1" }}
        />
    );
}

export default CovidInfectionMap;
