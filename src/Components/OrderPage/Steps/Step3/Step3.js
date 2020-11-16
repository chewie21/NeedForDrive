import React, {useEffect} from "react";

import {Color} from "./Color";
import {getRequest} from "../../../../Functions/RequestsToApiFactory";

export const Step3 = ({order}) => {

    useEffect(() => {
        getRequest(`http://api-factory.simbirsoft1.com/api/db/rate`).then(res => console.log(res));
        getRequest(`http://api-factory.simbirsoft1.com/api/db/rateType`).then(res => console.log(res));
    }, [])

    return (
        <Color order={order}/>
    )
}