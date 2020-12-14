import {Text} from "../../../../../../Common/Text/Text";
import React, {useState} from "react";
import {Form} from "react-bootstrap";

export const CarName = ({config, setConfig}) => {

	const [value, setValue] = useState(config.data.name ? config.data.name : '');

	const validation = (e) => {
		const regExp = /[^A-Za-z0-9 -.,]/g;
		const value = e.target.value.replace(regExp, ``);
		setValue(value);
	}

	const setCar = (e) => {
		let data = {...config.data};
		const value = e.target.value;
		if(value) {
			data.name = value;
			setConfig({...config, data: data});
		} else {
			setValue(data.name);
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
				Название
			</Text>
			<Form.Control
				isInvalid={!value}
				type="text"
				value={value}
				onInput={validation}
				onBlur={setCar}
			/>
		</React.Fragment>
	)
}