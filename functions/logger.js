let visitors = [];

exports.handler = async ({ body, headers }) => {
    try {
        visitors.push({
            timeVisited: new Date()
        });
        return {
            statusCode: 200,
            body: JSON.stringify({
                path: "logger endpoint",
                payload: visitors
            })
        };
    } catch (e) {
        console.error(`Dummy Endpoint Error Log ${e}`);
        return {
            statusCode: 500,
            body: `Webhook Error: ${e.message}`
        };
    }
}