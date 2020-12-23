import React, {useEffect, useState} from "react";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {CarColorContainer} from "../AdminCarsInfo/AdminCasrInfo.styled";
import {formatColor} from "../../../../../../Functions/Format";
import {rusLetValid} from "../../../../../../Validation/Validations";

export const CarColors = ({config, setConfig}) => {

	const [colors, setColors] = useState([]);
	const [value, setValue] = useState('');

	const addColor = () => {
		if(value) {
			const formatValue = formatColor(value);
			if(!colors.includes(formatValue)) {
				let data = {...config.data};
				data.colors.push(formatValue);
				setConfig({...config, data});
				setColors([...colors, formatValue]);
			}
			setValue('');
		}
	}

	const changeColor = (event) => {
		let color = event.target.name;
		let data = {...config.data};
		if(data.colors.includes(color)) {
			if(data.colors.length > 1) {
				data.colors.splice(data.colors.indexOf(color), 1);
			}
		} else {
			data.colors.push(color);
		}
		setConfig({...config, data});
	}

	//из-за того, что разные "разрабы" отправляют цвета в разных регистрах, их нужно форматировать
	useEffect(() => {
		let data = {...config.data};
		if(data.colors.length) {
			data.colors = data.colors.map(item => formatColor(item));
			setConfig({...config, data});
		}
	}, []);
	useEffect(() => {
		if(config.data.colors.length) setColors(config.data.colors.map(item => formatColor(item)));
	},[config.data.colors]);

	return (
		<CarColorContainer>
			<InputGroup>
				<FormControl
					className='mb-3'
					isInvalid={!colors.length}
					type="text"
					placeholder='Название цвета'
					onInput={event => rusLetValid(event, setValue)}
					value={value}
				/>
				<InputGroup.Append>
					<Button
						variant='outline-secondary'
						className='custom-btn'
						onClick={addColor}
					>
						Добавить
					</Button>
				</InputGroup.Append>
			</InputGroup>
			{colors &&
				colors.map((item, index) => (
					<Form.Check
						key={index}
						label={item}
						name={item}
						checked={config.data.colors.includes(item)}
						onChange={changeColor}
					/>
				))}
		</CarColorContainer>
	)
}