// eslint-disable-next-line no-undef
const config = require('../config');

// Test 1
test('Kit 7 should be deleted - Status Code Check', async () => {
    try {
        const deleteresponse = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
        });
        const actualStatusCode = deleteresponse.status;
        expect(actualStatusCode).toBe(200);
    } catch (error) {
        console.error(error);
    }
    
    const fetchDeletedResponse = await fetch(`${config.API_URL}/api/v1/kits/7`);
    expect(fetchDeletedResponse.status).toBe(404);
});

// Test 2
test('Kit 7 should be deleted - Response Body Check', async () => {
    try {
        const deleteresponse = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE',
        });
        const actualStatusCode = deleteresponse.status;
        const actualResponseBody = await deleteresponse.json(); 
        expect(actualStatusCode).toBe(200);
        expect(actualResponseBody).toBe({ message: 'The kit has been successfully deleted' });
    } catch (error) {
        console.error(error);
    }

    const fetchDeletedResponse = await fetch(`${config.API_URL}/api/v1/kits/7`);
    expect(fetchDeletedResponse.status).toBe(404);
});