import banksCode from "./sourceBank.json";

function getBankNameFromCard(digits) {
	if (!digits) return;

	if (digits && digits.toString().length === 16) {
		let code = digits.toString().substr(0, 6);
		
		let findBank = banksCode.find(bank => bank.code === code);

		if (findBank) {
			return findBank.name;
		} else {
			return null;
		}
	} else {
		return null;
	}
}

export default getBankNameFromCard;