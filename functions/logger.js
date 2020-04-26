let visitors = [];
let count = 0;

exports.handler = async ({ body, headers }) => {
    try {

        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        };

        count++;
        visitors.push({
            count,
            timeVisited: new Date()
        });
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                path: "logger endpoint",
                payload: visitors
            })
        };
    } catch (e) {
        console.error(`Dummy Endpoint Error Log ${e}`);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                path: "logger error endpoint",
                payload: `Webhook Error: ${e.message}`
            })
        };
    }
}