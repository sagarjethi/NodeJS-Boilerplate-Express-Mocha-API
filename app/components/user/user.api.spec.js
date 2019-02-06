const request = require('request');
const chai = require('chai');

const expect = chai.expect;

const config = require('../../../config/testing');
const testData = require('../../../config/testing/testData');

let token;

// TODO: Get test data from separate files

describe('Should Get User', () => {
    it('should login succesfully', (done) => {
        request.post({
            url: `${config.serverConfig.getUrl()}api/user/login`,
            form: {
                username: testData.username,
                password: testData.password,
            },
        }, (err, resp, body) => {
            const result = JSON.parse(body);     
            expect(resp.statusCode).to.equal(200);
            expect(result.code).to.equal(200);
            done();
        });
    });
});
