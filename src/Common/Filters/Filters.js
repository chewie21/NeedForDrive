import {
	AccordionContainer,
	ButtonsContainer,
	ButtonsMobileContainer,
	Container,
	customStyles,
	FiltersContainer,
	FiltersMobileContainer,
	LoadingMobileContainer,
	MobileContainer
} from "./Filters.styled";
import {AdminButton} from "../Button/AdminButton";
import Select from "react-select";
import React, {useState} from "react";
import {removeFilters, setFilters} from "../../Functions/FiltersFunctions";
import {Text} from "../Text/Text";
import {AdminLoading} from "../AdminLoading/AdminLoading";
import {Accordion, Button} from "react-bootstrap";

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
		<React.Fragment>
			<Container>
				<FiltersContainer>
					{loading &&
						<AdminLoading/>
					}
					{error &&
						<Text
							size='20px'
							weight='normal'
							margin='0'
							color='#3D5170'
						>
							Ошибка при поиске... Повторите попытку!
						</Text>
					}
					{config && !loading && !error &&
						(
							config.data.length ?
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
								</Text>
						)
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
			<MobileContainer>
				<Accordion>
					<Accordion.Toggle as={Button} variant='primary' eventKey="0" size='sm' className='w-100'>
						Фильтры
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0" children={AccordionContainer}>
						<AccordionContainer>
							<FiltersMobileContainer>
								{loading &&
									<LoadingMobileContainer>
										<AdminLoading/>
									</LoadingMobileContainer>
								}
								{error &&
									<Text
										size='20px'
										weight='normal'
										margin='15px 0 0 0'
										color='#3D5170'
									>
										Ошибка при поиске... Повторите попытку!
									</Text>
								}
								{config &&
									(
										config.data.length ?
											filtersConfig.map((item, index) => (
												<Select
													key={index}
													value={thisFilters ? thisFilters[item.options[0].name] ? thisFilters[item.options[0].name] : null : null}
													placeholder={item.placeholder}
													styles={customStyles}
													options={item.options}
													onChange={addFilters}
												/>
											)) :
											<Text
												size='20px'
												weight='normal'
												margin='15px 0 0 0'
												color='#3D5170'
											>
												Ничего не найденно...
											</Text>
									)
								}
							</FiltersMobileContainer>
							{
								thisFilters &&
								<ButtonsMobileContainer>
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
								</ButtonsMobileContainer>
							}
						</AccordionContainer>
					</Accordion.Collapse>
				</Accordion>
			</MobileContainer>
		</React.Fragment>
	)
}