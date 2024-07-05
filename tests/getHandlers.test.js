const config = require('../config');

test('200 Status Code should be returned', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`);
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Response body contains `Pasta` data as expected', async () => {
	let actualResponseBody
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe("Pasta");
});