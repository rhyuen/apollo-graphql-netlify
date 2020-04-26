let visitors = [];
let count = 0;

exports.handler = async ({ body, headers, httpMethod }) => {
    try {

        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        };

        switch (httpMethod) {
            case 'GET':
                return {
                    statusCode: 200,
                    headers,
                    payload: `the get endpoint for form.`
                }
            case 'POST':
                const { username, password } = body;
                return {
                    statusCode: 200,
                    headers,
                    payload: `Your username is ${username} and your password is ${password}`
                }
            case 'OPTIONS':

                return {
                    statusCode: 200,
                    headers,
                    payload: "preflight calls."
                };
        }



        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                path: "form endpoint",
                payload: visitors
            })
        };
    } catch (e) {
        console.error(`ise for form endpoint ${e}`);
        return {
            statusCode: 500,
            headers,
            body: `ise endpoint: ${e.message}`
        };
    }
}