const axios = require("axios");
const ROOT = "http://localhost:8888/.netlify/functions";

describe("dummy test", () => {
    test("blah", (done) => {
        expect(12).toEqual(12);
        console.log("test.")
        done();
    });

    test("axios hits dummy endpoint", async (done) => {
        const res = await axios.get(`${ROOT}/dummy`);
        expect(res.data.message).toEqual("This is the dummy endpoint.");
        done();
    });

    test("axios hits logger", async (done) => {
        const res = await axios.get(`${ROOT}/logger`);
        expect(res.data.path).toEqual("logger endpoint");
        done();
    });
});