const app = require('../app')
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('GET /hotels', function(){
    it('should be 404 status',function(done){
        request(app)
        .get('/api/hotels?name=afg')
        .expect(res=>{
            let response = res.status
            assert.strictEqual(response,404)
        })
        .end((err, res) => {
            if(err){
                return done(err)
            }
            return done()
        })
    })
})