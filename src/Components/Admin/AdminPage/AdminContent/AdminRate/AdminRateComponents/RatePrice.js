import React, {useState} from "react";
import {Text} from "../../../../../../Common/Text/Text";
import {Form} from "react-bootstrap";
import {priceValid} from "../../../../../../Validation/Validations";
import {setValueToConfig} from "../../../../../../Functions/SetConfigFunctions";

export const RatePrice = ({config, setConfig}) => {

	const [value, setValue] = useState(config.data.price ? config.data.price : '');

	return (
		<React.Fragment>
			<Text
				weight='500'
				size='15px'
				color='#3D5170'
				margin='0 0 6px 0'
			>
				Цена
			</Text>
			<Form.Control
				isInvalid={!value}
				type="text"
				value={value}
				onInput={event => priceValid(event, setValue)}
				onBlur={event => setValueToConfig(event, config, setConfig, setValue, `price`)}
			/>
		</React.Fragment>
	)
}