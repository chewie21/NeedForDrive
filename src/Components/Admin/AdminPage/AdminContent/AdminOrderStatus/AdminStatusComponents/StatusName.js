import React, {useState} from "react";
import {Text} from "../../../../../../Common/Text/Text";
import {Form} from "react-bootstrap";

export const StatusName = ({config, setConfig}) => {

	const [value, setValue] = useState(config.data.name ? config.data.name : '');

	const validation = (e) => {
		const regExp = /[^А-Яа-я0-9- ]/g;
		const value = e.target.value.replace(regExp, ``);
		setValue(value);
	}

	const setCity = (e) => {
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
				onBlur={setCity}
			/>
		</React.Fragment>
	)
}