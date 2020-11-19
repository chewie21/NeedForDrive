import {Text} from "../../../../Common/Text/Text";
import React, {useEffect, useState} from "react";
import {customStyles, MapContainer, PointRow} from "./Step1.styled";
import {YandexMap} from "../../../../Common/Map/Map";
import {setPoints} from "../../../../Functions/Async";
import Select from "react-select";
import {addPointToOrder} from "../../../../Functions/AddToOrder";

export const SelectPoint = ({
        changeCity,
        setOrder, order,
        response, loading, error,
        changeUnlockSteps, removeUnlockSteps
    }) => {

    const [pointsOfCity, setPointsOfCity] = useState(null);
    const [center, setCenter] = useState(null);

    const [thisChangeCity, setThisChangeCity] = useState(null);
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (!changeCity && thisChangeCity) {
            setThisChangeCity(null);
            setPointsOfCity(null);
        }
        if (response && changeCity) {
            if(changeCity !== thisChangeCity) {
                setThisChangeCity(changeCity);
                setPoints(response, changeCity, setPointsOfCity, setCenter, order, setValue).then();
            }
        }
    });

    return (
        <React.Fragment>
            <PointRow>
                <Text weight='300'
                    size='14px'
                    color='#121212'
                    margin='0 16px 0 0'
                    width='84px'
                    textAlign='end'
                >
                    Пункт выдачи
                </Text>
                <Select
                    value={changeCity !== thisChangeCity ? null : order ? value : null}
                    styles={customStyles}
                    options={pointsOfCity}
                    placeholder='Выбрать...'
                    isClearable={true}
                    isLoading={loading || changeCity ? changeCity !== thisChangeCity : false}
                    isDisabled={error || loading
                                || !changeCity || changeCity !== thisChangeCity
                                || !pointsOfCity}
                    onChange={
                        (e) => {
                            if (e) {
                                changeUnlockSteps(0);
                                setValue(e);
                                setCenter(e.coordinates);
                                setOrder(addPointToOrder(e));
                            }
                            else {
                                setValue(e);
                                setOrder(null);
                                removeUnlockSteps(0);
                            }
                        }
                    }
                />
            </PointRow>
            {pointsOfCity ? Boolean(pointsOfCity.length) ?
                <MapContainer>
                    <YandexMap
                        pointsOfCity={pointsOfCity}
                        center={center}
                        setCenter={setCenter}
                        setOrder={setOrder}
                        setValue={setValue}
                        changeUnlockSteps={changeUnlockSteps}
                    />
                </MapContainer> :
                <Text
                    weight='500'
                    size='16px'
                    color='#121212'
                >
                    В этом городе нет доступных пунктов выдачи...
                </Text> : ''
            }
        </React.Fragment>
    )
}