import React from "react";

import {LeftSection, ListRow, MiddleSection, RightSection} from "./OrderInfo.styled";
import {Text} from "../Text/Text";

export const OrderInfoListItem = ({label, value}) =>
    <ListRow>
        <LeftSection>
            <Text
                weight='300'
                margin='0 5px 0 0'
                size='14px'
                color='#121212'
            >
                {label}
            </Text>
        </LeftSection>
        <MiddleSection/>
        <RightSection>
            <Text
                weight='300'
                margin='0 0 0 5px'
                size='14px'
                color='#999999'
            >
                {value}
            </Text>
        </RightSection>
    </ListRow>
;