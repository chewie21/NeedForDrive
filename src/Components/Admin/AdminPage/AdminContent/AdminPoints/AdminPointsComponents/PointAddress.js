import React, {useState} from "react";
import {Text} from "../../../../../../Common/Text/Text";
import {Form} from "react-bootstrap";

export const PointAddress = ({config, setConfig}) => {

	const [value, setValue] = useState(config.data.address ? config.data.address : '');

	const validation = (e) => {
		const regExp = /[^А-Яа-я0-9-., ]/g;
		const value = e.target.value.replace(regExp, ``);
		setValue(value);
	}

	const setPoint = (e) => {
		let data = {...config.data};
		const value = e.target.value;
		if(value) {
			data.address = value;
			setConfig({...config, data: data});
		} else {
			setValue(data.address);
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
				Адрес
			</Text>
			<Form.Control
				isInvalid={!value}
				type="text"
				value={value}
				onInput={validation}
				onBlur={setPoint}
			/>
		</React.Fragment>
	)
}