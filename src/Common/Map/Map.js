import {Map, Placemark, YMaps} from "react-yandex-maps";
import React from "react";

import {Text} from "../Text/Text";
import {addPointToOrder} from "../../Functions/AddToOrder";

export const YandexMap = ({pointsOfCity, center, setCenter, setOrder, setValue, changeUnlockSteps}) =>

    <React.Fragment>
        <Text
            weight='300'
            size='14px'
            color='#121212'
            margin='0 0 16px 0'
        >
            Выбрать на карте:
        </Text>
        <YMaps>
            <Map
                modules={['geocode']}
                state={{center: center, zoom: 12}}
                width='100%'
                height='350px'>
                {pointsOfCity.map((item, index) =>
                    <Placemark
                        onClick={
                            () => {
                                setCenter(item.coordinates);
                                setValue({label: item.label, value: item.value});
                                setOrder(addPointToOrder(item.pointId, item.cityId, item.coordinates));
                                changeUnlockSteps(0);
                            }
                        }
                        key={index}
                        geometry={item.coordinates}
                        options={{preset: 'islands#circleIcon', iconColor: '#0EC261'}}
                    />
                )}
            </Map>
        </YMaps>
    </React.Fragment>
