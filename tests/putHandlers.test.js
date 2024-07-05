const config = require('../config');

const requestBody = {
    "productList": [
        {
            "id": 5,
            "quantity": 3 
        }
    ]
};

test('Response should return 200 status code while updating', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/products/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualStatusCode = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatusCode).toBe(200);
});

test('Response body should reflect the updated product', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/products/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }

    expect(actualResponseBody).toEqual({
		"ok": true
    });
});
