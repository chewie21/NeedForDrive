import {Text} from "../../../../../../Common/Text/Text";
import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {engLetValid} from "../../../../../../Validation/Validations";
import {setValueToConfig} from "../../../../../../Functions/SetConfigFunctions";

export const CarName = ({config, setConfig}) => {

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
				onInput={event => engLetValid(event, setValue)}
				onBlur={event => setValueToConfig(event, config, setConfig, setValue, `name`)}
			/>
		</React.Fragment>
	)
}