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

describe('POST /hotels', function () {

    it('capacity should be a number', function (done) {
        request(app)
            .post('/api/hotels')
            .send({
                name: "hotel Rio de Janeiro",
                photo: "https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2022/05/06/62752986a0b9f.r_1651848957740.0-73-1500-823.jpeg",
                capacity:5020,
                cityID:"636d3af27ccd7c6ea97b82e4",
                userID:"636d210297606439046194bb"
            })
            .expect(res=>{
                let response = res.body.response.capacity
                console.log(response)
                assert.isNumber(response,"is number")
            })
            .expect(res=>{
                let response = res.status
                assert.strictEqual(response,201)
            })
            .end((err, res) => {
                if(err){
                    return done(err)
                }
                return done()
            })
    })})

    describe('POST /hotels', function () {

        it('should be status 201', function (done) {
            request(app)
                .post('/api/hotels')
                .send({
                    name: "hotel del rio",
                    photo: "https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2022/05/06/62752986a0b9f.r_1651848957740.0-73-1500-823.jpeg",
                    capacity:5020,
                    cityID:"636d3af27ccd7c6ea97b82e4",
                    userID:"636d210297606439046194bb"
                })
                .expect(res=>{
                    let response = res.status
                    assert.strictEqual(response,201)
                })
                .end((err, res) => {
                    if(err){
                        return done(err)
                    }
                    return done()
                })
        })})