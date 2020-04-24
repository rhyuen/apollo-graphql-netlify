exports.handler = async ({ body, headers }) => {
    try {

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "This is the dummy endpoint." })
        };
    } catch (e) {
        console.error(`Dummy Endpoint Error Log ${e}`);
        return {
            statusCode: 500,
            body: `Webhook Error: ${e.message}`
        };
    }
}