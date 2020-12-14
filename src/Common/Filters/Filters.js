import {ButtonsContainer, Container, customStyles, FiltersContainer} from "./Filters.styled";
import {AdminButton} from "../Button/AdminButton";
import Select from "react-select";
import {useState} from "react";
import {removeFilters, setFilters} from "../../Functions/FiltersFunctions";

export const Filters = ({config, setConfig, filtersConfig, auth, url}) => {

	const [thisFilters, setThisFilters] = useState(null);

	const addFilters = (value) => {
		thisFilters ?
			setThisFilters({...thisFilters, [value.name]: value})
				:
			setThisFilters({[value.name]: value})
	}

	return (
		<Container>
			<FiltersContainer>
				{filtersConfig.map((item, index) => (
					<Select
						key={index}
						value={thisFilters ? thisFilters[item.options[0].name] ? thisFilters[item.options[0].name] : null : null}
						placeholder={item.placeholder}
						styles={customStyles}
						options={item.options}
						onChange={addFilters}
					/>
				))}
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
							removeFilters(config, setConfig, auth, url);
						}}
					>
						Сбросить
					</AdminButton>
					<AdminButton
						size='11.5px'
						padding='8px'
						color='#007BFF'
						width='45%'
						onClick={() => setFilters(thisFilters, config, setConfig, auth, url)}
					>
						Найти
					</AdminButton>
				</ButtonsContainer>
			}
		</Container>
	)
}