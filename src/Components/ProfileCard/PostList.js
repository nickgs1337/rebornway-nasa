import React, { Component, useEffect  } from 'react';

const PostList = ({dataLocation}) => {

    const [data, setData] = React.useState(null);
    const [status, setStatus] = React.useState(true);
    const [local, setLocal] = React.useState(true);
    const [latitude, setLatitude] = React.useState(null);
    const [longitude, setLongitude] = React.useState(null);
    const [time, setTime] = React.useState(null);

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function search(response) {
        setData('East Chestnut Street, Independence');
        response.results.forEach((teste) => {
            if(teste['types'].indexOf('administrative_area_level_1') > -1) {
                setData(teste['formatted_address']);
            }
        });
    }

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                // eslint-disable-next-line no-unused-expressions
                delay(50).then(() => fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyDPD29xVHUzySFw8UdlfKitlWOQMrP1FQo')
                    .then((response) => response.json())
                    .then((responseJson) => {
                        //setData(responseJson['results'][0]['address_components'][1]['long_name'] + ", " + responseJson['results'][0]['address_components'][2]['short_name'])
                        search(responseJson)
                    })),
                setLatitude(position.coords.latitude),
                setLongitude(position.coords.longitude)
            },
            (error) => (setStatus(false)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );


    }, [dataLocation])

    return (status ? (`${data}` === 'East Chestnut Street, Independence' ? ' Location not found - Please enable your location' : `${data}`) : 'Location not found - Please enable your location');

}

export default PostList;

