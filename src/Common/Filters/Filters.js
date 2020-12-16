import {ButtonsContainer, Container, customStyles, FiltersContainer} from "./Filters.styled";
import {AdminButton} from "../Button/AdminButton";
import Select from "react-select";
import {useEffect, useState} from "react";
import {removeFilters, setFilters} from "../../Functions/FiltersFunctions";
import {Text} from "../Text/Text";
import {AdminLoading} from "../AdminLoading/AdminLoading";

export const Filters = ({config, setConfig, filtersConfig, auth, url}) => {

	const [thisFilters, setThisFilters] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const addFilters = (value) => {
		thisFilters ?
			setThisFilters({...thisFilters, [value.name]: value})
				:
			setThisFilters({[value.name]: value})
	}

	return (
		<Container>
			<FiltersContainer>
				{loading ?
					<AdminLoading/> :
					error ?
						<Text
							size='20px'
							weight='normal'
							margin='0'
							color='#3D5170'
						>
							Ошибка при поиске... Повторите попытку!
						</Text> :
						(config.data.length ?
							filtersConfig.map((item, index) => (
								<Select
									key={index}
									value={thisFilters ? thisFilters[item.options[0].name] ? thisFilters[item.options[0].name] : null : null}
									placeholder={item.placeholder}
									styles={customStyles}
									options={item.options}
									onChange={addFilters}
								/>)) :
							<Text
								size='20px'
								weight='normal'
								margin='0'
								color='#3D5170'
							>
								Ничего не найденно...
							</Text>)
					}
			</FiltersContainer>
			{
				thisFilters &&
				<ButtonsContainer>
					<AdminButton
						size='11.5px'
						padding='8px'
						color='#CB3656'
						width='45%'
						onClick={() => {
							setThisFilters(null);
							removeFilters(config, setConfig, auth, url, setError, setLoading);
						}}
					>
						Сбросить
					</AdminButton>
					<AdminButton
						size='11.5px'
						padding='8px'
						color='#007BFF'
						width='45%'
						onClick={() => setFilters(thisFilters, config, setConfig, auth, url, setError, setLoading)}
					>
						Найти
					</AdminButton>
				</ButtonsContainer>
			}
		</Container>
	)
}