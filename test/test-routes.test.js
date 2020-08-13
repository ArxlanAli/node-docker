const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('request');


describe('Main App file routes tests',() => {
    it("Main app get route",(done) => {
        request('http://localhost:3001',(error,response,body) => {
            // expect(body).to.equal('Hello from docker jenkins 10');
            assert.equal(body,'Hello from docker jenkins 10','is equal')
            done();
        })
    })
    it("mAin app get dummy route" ,(done) => {
        request('http://localhost:3001/dummy',(error,res,body) => {
            expect(res.statusCode).to.equal(500);
            expect(body).to.equal('Something went wrong');
            done();
        })
    })
    it('Have property a',(done) => {
        let a = {a:1}
        expect(a).to.have.property('a',1);
        done();
    })
    it("not Found",(done) => {
        request('http://localhost:3001/21wwgdsydfygd',(error,res,body) => {
            expect(res.statusCode).to.equal(404);
            expect(body).to.equal('Not Found');
            done();
        })
    })
})
