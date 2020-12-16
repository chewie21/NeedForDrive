import React, {useState} from "react";
import {Text} from "../../../../../../Common/Text/Text";
import {Form} from "react-bootstrap";

export const RatePrice = ({config, setConfig}) => {

	const [value, setValue] = useState(config.data.price ? config.data.price : '');

	const validation = (e) => {
		const regExp = /[^0-9]/g;
		const value = e.target.value.replace(regExp, ``);
		setValue(value);
	}

	const setPrice = (e) => {
		let data = {...config.data};
		const value = e.target.value;
		if(value) {
			data.price = value;
			setConfig({...config, data: data});
		} else {
			setValue(data.price);
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
				Цена
			</Text>
			<Form.Control
				isInvalid={!value}
				type="text"
				value={value}
				onInput={validation}
				onBlur={setPrice}
			/>
		</React.Fragment>
	)
}