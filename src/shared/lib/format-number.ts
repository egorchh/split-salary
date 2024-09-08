export const formatNumber = (num: string): string => {
	const cleanValue = num.replace(/'/g, '');

	return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, '\'');
};