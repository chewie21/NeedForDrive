import {useEffect, useState} from "react";
import {yandexGetUserLocation} from "../Environments/YMapsUrls";

export const useUserLocation = () => {

    const [userLocation, setUserLocation] = useState(null);
    const [confirmedUserLocation, setConfirmed] = useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const str =  position.coords.longitude + ', ' + position.coords.latitude;
                fetch(yandexGetUserLocation(str))
                    .then(res => res.json())
                    .then(result => {
                        setUserLocation(result.response.GeoObjectCollection.featureMember[0].GeoObject);
                        setConfirmed(false);
                    }, error => console.error(error));
            }
        );
    }, []);

    const confirmUserLocation = (param) => {
        setConfirmed(true);
        if(!param) setUserLocation(null);
    }

    return {userLocation, confirmedUserLocation, confirmUserLocation}
}