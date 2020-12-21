import {getRequest} from "./RequestsToApiFactory";

export const setFilters = (filters, config, setConfig, auth, url, setError, setLoading) => {
	setLoading(true);
	setError(false);
	let str;
	for(const key in filters) {
		if(key === 'createdAt') {
			const date = new Date().getTime() - filters[key].value;
			str ?
				(str = str + '&' + filters[key].name + '[$gt]' + '=' + date) :
				(str = filters[key].name + '[$gt]'+ '=' + date);
		} else {
			str ?
				(str = str + '&' + filters[key].name + '=' + filters[key].value) :
				(str = filters[key].name + '=' + filters[key].value);
		}
	}
	let newUrl = `${url}?${str}`;
	getRequest(`${newUrl}&page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
		.then(res => {
			setConfig({
				...config,
				page: 1,
				data: res.data,
				url: newUrl,
				count: Math.ceil(res.count / 10)
			});
			setLoading(false);
		}).catch(error => {
			setLoading(false);
			setError(true);
	});
}

export const removeFilters = (config, setConfig, auth, url, setError, setLoading) => {
	setError(false);
	setLoading(true);
	getRequest(`${url}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
		.then(res => {
			setConfig({
				...config,
				page: 1,
				data: res.data,
				url: `${url}?`,
				count: Math.ceil(res.count / 10)
			});
			setLoading(false);
		}).catch(error => {
			setLoading(false);
			setError(true);
	});
}