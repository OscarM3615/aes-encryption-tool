import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

export const encrypt = (message, key) => {
	return AES.encrypt(message, key).toString();
};

export const decrypt = (message, key) => {
	return AES.decrypt(message, key).toString(Utf8);
};
