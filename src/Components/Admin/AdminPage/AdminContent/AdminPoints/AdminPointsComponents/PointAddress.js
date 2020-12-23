import React, {useState} from "react";
import {Text} from "../../../../../../Common/Text/Text";
import {Form} from "react-bootstrap";
import {rusLetValid} from "../../../../../../Validation/Validations";
import {setValueToConfig} from "../../../../../../Functions/SetConfigFunctions";

export const PointAddress = ({config, setConfig}) => {

	const [value, setValue] = useState(config.data.address ? config.data.address : '');

	return (
		<React.Fragment>
			<Text
				weight='500'
				size='15px'
				color='#3D5170'
				margin='0 0 6px 0'
			>
				Адрес
			</Text>
			<Form.Control
				isInvalid={!value}
				type="text"
				value={value}
				onInput={event => rusLetValid(event, setValue)}
				onBlur={event => setValueToConfig(event, config, setConfig, setValue, `address`)}
			/>
		</React.Fragment>
	)
}