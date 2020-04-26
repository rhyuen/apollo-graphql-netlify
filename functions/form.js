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
                    body: JSON.stringify({
                        payload: `the get endpoint for form.`
                    })
                }
            case 'POST':
                const { username, password } = body;
                console.log('post method');
                console.log(`${username} and ${password}`);
                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify({
                        payload: `Your username is ${username} and your password is ${password}`
                    })
                }
            case 'OPTIONS':
                console.log("OPTIONS call");
                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify({
                        payload: `OPTIONS call.`
                    })
                };
        }
    } catch (e) {
        console.error(`ise for form endpoint ${e}`);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                payload: `ise endpoint: ${e.message}`
            })
        };
    }
}