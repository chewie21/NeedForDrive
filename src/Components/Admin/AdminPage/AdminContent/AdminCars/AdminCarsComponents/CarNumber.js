import {Text} from "../../../../../../Common/Text/Text";
import {Form} from "react-bootstrap";
import React, {useState} from "react";
import {regExpNumber} from "../../../../../../Validation/Validations";

export const CarNumber = ({config, setConfig}) => {

	const [value, setValue] = useState(config.data.number ? config.data.number : '');

	const setNumber = (event) => {
		let data = {...config.data};
		const value = event.target.value;
		if(value) {
			if(regExpNumber.test(value)) {
				data.number = value
				setConfig({...config, data});
			} else {
				setValue(data.number);
			}
		} else {
			setValue(data.number);
		}
	}

	return (
		<React.Fragment>
			<Text
				weight='500'
				size='15px'
				color='#3D5170'
				margin='0 0 6px 0'
			>
				Номер
			</Text>
			<Form.Control
				isInvalid={!value || !regExpNumber.test(value)}
				type="text"
				value={value}
				onInput={event => setValue(event.target.value)}
				onBlur={setNumber}
			/>
			<Form.Control.Feedback type="invalid">
				Вид номера - А163АА63
			</Form.Control.Feedback>
		</React.Fragment>
	)
}