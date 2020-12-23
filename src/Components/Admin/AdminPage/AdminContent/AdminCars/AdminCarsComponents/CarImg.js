import {Form} from "react-bootstrap";
import React, {useState} from "react";
import {formatImgPath} from "../../../../../../Functions/Format";
import {mainUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {CarImgContainer, CarTitleImg} from "../AdminCarsInfo/AdminCasrInfo.styled";

export const CarImg = ({config, setConfig}) => {

	const [value, setValue] = useState(Object.keys(config.data.thumbnail).length !== 0);

	const setImg = (event) => {
		if(event.target.files) {
			const data = {...config.data};
			const file = event.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function() {
				data.thumbnail = {
					mimetype: file.type,
					originalname: file.name,
					path: reader.result,
					size: file.size
				}
				setValue(true);
				setConfig({...config, data});
			};
		}
	}

	return (
		<CarImgContainer>
			<CarTitleImg src={formatImgPath(config.data, mainUrlPages)} />
				<Form.File
					onFocus={() => setValue(false)}
					onChange={setImg}
					isInvalid={!value}
					label="Выбирите фаил..."
					data-browse="Обзор"
					custom
				/>
		</CarImgContainer>
	)
}