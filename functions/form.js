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
                const data = JSON.parse(body);
                console.log(data);
                console.log(data.username);
                console.log(data.password);
                console.log('post method');
                console.log(`${data.username} and ${data.password}`);
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