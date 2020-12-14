import {Text} from "../../../../../../Common/Text/Text";
import {Form} from "react-bootstrap";
import React, {useState} from "react";

export const CarNumber = ({config, setConfig}) => {

	const [value, setValue] = useState(config.data.number ? config.data.number : null);

	const regExp = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;

	const editOrder = (e) => {
		let data = {...config.data};
		const value = e.target.value;
		if(value) {
			if(regExp.test(value)) {
				data.number = value
				setConfig({...config, data: data});
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
				isInvalid={!value || !regExp.test(value)}
				type="text"
				value={value}
				onInput={(e) => setValue(e.target.value)}
				onBlur={editOrder}
			/>
			<Form.Control.Feedback type="invalid">
				Вид номера - А163АА63
			</Form.Control.Feedback>
		</React.Fragment>
	)
}