import {Text} from "../../../../../../Common/Text/Text";
import {Form} from "react-bootstrap";
import React, {useState} from "react";
import {rusLetValid} from "../../../../../../Validation/Validations";
import {setValueToConfig} from "../../../../../../Functions/SetConfigFunctions";

export const CityName = ({config, setConfig}) => {

	const [value, setValue] = useState(config.data.name ? config.data.name : '');

	return (
		<React.Fragment>
			<Text
				weight='500'
				size='15px'
				color='#3D5170'
				margin='0 0 6px 0'
			>
				Название
			</Text>
			<Form.Control
				isInvalid={!value}
				type="text"
				value={value}
				onInput={event => rusLetValid(event, setValue)}
				onBlur={event => setValueToConfig(event, config, setConfig, setValue, `name`)}
			/>
		</React.Fragment>
	)
}