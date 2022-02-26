import BigNumber from "bignumber.js";
export default {
	sanitizeHex(hex) {
		hex = hex.substring(0, 2) === "0x" ? hex.substring(2) : hex;
		if (hex === "") {
			return "";
		}
		hex = hex.length % 2 !== 0 ? "0" + hex : hex;
		return "0x" + hex;
	},
	convertStringToHex(value) {
		return new BigNumber(`${value}`).toString(16);
	}
}