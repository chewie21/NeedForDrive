import React, {useState} from "react";
import {Text} from "../../../../../../Common/Text/Text";
import {Form} from "react-bootstrap";

export const PointDescription = ({config, setConfig}) => {

	const [value, setValue] = useState(config.data.name ? config.data.name : '');

	const setPoint = (e) => {
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
				Описание
			</Text>
			<Form.Control
				isInvalid={!value}
				type="text"
				value={value}
				onInput={(e) => setValue(e.target.value)}
				onBlur={setPoint}
			/>
		</React.Fragment>
	)
}