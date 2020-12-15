import {Text} from "../../../../../../Common/Text/Text";
import {Form} from "react-bootstrap";
import React, {useState} from "react";

export const CategoryDescription = ({config, setConfig}) => {

	const [value, setValue] = useState(config.data.description ? config.data.description : '');

	const setDescription = (e) => {
		let data = {...config.data};
		const value = e.target.value;
		if(value) {
			data.description = value;
			setConfig({...config, data: data});
		} else {
			setValue(data.description);
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
				onBlur={setDescription}
			/>
		</React.Fragment>
	)
}