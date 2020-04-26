let visitors = [];
let count = 0;

exports.handler = async ({ body, headers, httpMethod }) => {
    try {

        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
        };

        console.log(httpMethod);

        switch (httpMethod) {
            case 'GET':
                console.log('get method');
                return {
                    statusCode: 200,
                    headers,
                    payload: `the get endpoint for form.`
                }
            case 'POST':
                const { username, password } = body;
                console.log('post method');
                console.log(`${username} and ${password}`);
                return {
                    statusCode: 200,
                    headers,
                    payload: `Your username is ${username} and your password is ${password}`
                }
            case 'OPTIONS':
                console.log("OPTIONS call");
                return {
                    statusCode: 200,
                    headers,
                    payload: "preflight calls."
                };
        }
    } catch (e) {
        console.error(`ise for form endpoint ${e}`);
        return {
            statusCode: 500,
            headers,
            body: `ise endpoint: ${e.message}`
        };
    }
}