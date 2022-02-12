const charset =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charsetLength = charset.length;

export const getRandomKey = (length = 16) => {
	let result = '';

	for (let i = 0; i < length; i++) {
		result += charset[Math.floor(Math.random() * charsetLength)];
	}

	return result;
};
