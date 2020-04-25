let visitors = [];
let count = 0;

exports.handler = async ({ body, headers }) => {
    try {
        count++;
        visitors.push({
            count,
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