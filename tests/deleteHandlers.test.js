const config = require('../config');

test('Kit 7 should be deleted - Status Code 200 Check', async () => {
	let actualStatusCode;
    try {
        const deleteresponse = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
        });
        actualStatusCode = deleteresponse.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatusCode).toBe(200);
});

test('Kit 7 should be deleted - Response Body Check', async () => {
    let actualResponseBody;
    try {
        const deleteresponse = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
        });

        actualResponseBody = await deleteresponse.json(); 
    } catch (error) {
        console.error(error);
    }
    expect(actualResponseBody["ok"]).toBe(true);
});