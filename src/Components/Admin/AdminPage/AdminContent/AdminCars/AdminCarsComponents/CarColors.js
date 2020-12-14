import React, {useEffect, useState} from "react";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";
import {CarColorContainer} from "../AdminCarsInfo/AdminCasrInfo.styled";
import {formatColor} from "../../../../../../Functions/Format";

export const CarColors = ({config, setConfig}) => {

	const [colors, setColors] = useState([]);
	const [value, setValue] = useState(null);

	const validation = (e) => {
		const regExp = /[^А-Яа-я-]/g;
		const value = e.target.value.replace(regExp, ``);
		setValue(value);
	}

	const addColor = () => {
		if(value) {
			const formatValue = formatColor(value);
			if(!colors.includes(formatValue)) {
				let data = {...config.data};
				data.colors.push(formatValue);
				setConfig({...config, data: data});
				let arr = [...colors];
				arr.push(formatValue);
				setColors(arr);
			}
			setValue('');
		}
	}

	const changeColor = (e) => {
		let color = e.target.name;
		let data = {...config.data};
		if(data.colors.includes(color)) {
			if(data.colors.length > 1) {
				data.colors.splice(data.colors.indexOf(color), 1);
			}
		} else {
			data.colors.push(color);
		}
		setConfig({...config, data: data});
	}

	//из-за того, что разные "разрабы" отправляют цвета в разных регистрах, их нужно форматировать
	useEffect(() => {
		let data = {...config.data};
		if(data.colors.length) {
			data.colors = data.colors.map(item => formatColor(item));
			setConfig({...config, data: data});
		}
	}, []);
	useEffect(() => {
		if(!colors.length) {
			if(config.data.colors.length) {
				let arr = config.data.colors.map(item => formatColor(item));
				setColors(arr);
			}
		}
	})

	return (
		<CarColorContainer>
			<InputGroup>
				<FormControl
					className='mb-3'
					isInvalid={!colors.length}
					type="text"
					placeholder='Название цвета'
					onInput={validation}
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