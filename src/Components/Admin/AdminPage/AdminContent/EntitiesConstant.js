//cars
export const carsTableHeaders = [
	'Модель', 'Категория', 'Номер', 'Бензин'
];
export const emptyCar = {
	categoryId: {},
	colors: [],
	name: '',
	description: '',
	number: '',
	priceMax: '',
	priceMin: '',
	thumbnail: {}
}

//categories
export const categoriesTableHeaders = [
	'Категория'
];
export const emptyCategory = {
	name : '',
	description: ''
};

//cities
export const citiesTableHeaders = [
	'Город'
];
export const emptyCity = {
	name: ''
};

//orders
export const timeOptions = [
	{
		label: 'За сутки',
		value: 86400000,
		name: 'createdAt'
	},
	{
		label: 'За неделю',
		value: 604800000,
		name: 'createdAt'
	},
	{
		label: 'За месяц',
		value: 2628002880,
		name: 'createdAt'
	},
];

//orderStatus
export const orderStatusTableHeaders = [
	'Статус'
];
export const emptyOrderStatus = {
	name : ''
};

//point
export const pointTableHeaders = [
	'Адрес', 'Город', 'Описание'
];
export const emptyPoints = {
	address: '',
	name: '',
	cityId: {}
}

//rate
export const rateTableHeaders = [
	'Цена', 'Тариф'
];
export const emptyRate = {
	rateTypeId: {},
	price: ''
};

//rateType
export const rateTypeTableHeaders = [
	'Название'
];
export const emptyRateType = {
	unit: '',
	name: ''
};