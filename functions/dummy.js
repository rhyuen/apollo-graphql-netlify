exports.handler = async ({ body, headers }) => {
    try {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        };
        return {
            headers,
            statusCode: 200,
            body: JSON.stringify({ message: "This is the dummy endpoint." })
        };
    } catch (e) {
        console.error(`Dummy Endpoint Error Log ${e}`);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: `Webhook Error: ${e.message}` })
        };
    }
}