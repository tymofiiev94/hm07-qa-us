// eslint-disable-next-line no-undef
const config = require('../config');

// Test1
test('200 Status Code should be returned', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`);
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

// Test 2
test('Response body contains expected data', async () => {
	let actualResponseBody
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody.name).toBe("Pasta");
});