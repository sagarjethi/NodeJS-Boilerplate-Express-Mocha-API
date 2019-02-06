const chai = require("chai");
const expect = chai.expect;

describe('Testing setup', function() {
    describe('True is True', function() {
        it('should return true', function() {
            expect(true).to.equal(true);
        });
    });
});