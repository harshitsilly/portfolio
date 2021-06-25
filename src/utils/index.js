export const getBaseUrl = () => {
	if (process.browser) {
		return window.location.origin;
	}
};

export const setUrl = (param, query) => {
	if (process.browser) {
		if (query) {
			return `${window.location.origin}/${param}?${query}`;
		}
		return `${window.location.origin}/${param}`;
	}
};
