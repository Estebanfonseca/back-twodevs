const app = require('../app')
const {assert} = require('chai')
const request = require('supertest')
const {TEST_TOKEN} = process.env

describe('GET /cities', () => {
    it('should return an array of objects', done => {
        request(app)
            .get('/api/cities')
            .expect(res => {
                let data = res.body.response
                assert.isArray(data, 'it should be an array')
                data.forEach(element => {
                    assert.isObject(element, 'it should be an object')
                });
            })
            .end((err, res) => {
                err ? done(err) : done()
            })
    })
})
describe('POST /cities', () => {
    it('name field should be a string and if a new city cannot be created, success state should be false', done => {
        let testReq = {
            "name": "New York",
            "continent": "North America",
            "photo": "https://images.unsplash.com/photo-1501194811830-ebb130b29b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1214&q=80",
            "population": 18867000,
            "userId": "636d210297606439046194bb"
        }
        let token = TEST_TOKEN
        request(app)
            .post('/api/cities')
            .send(testReq)
            .set('Authorization', `bearer ${token}`)
            .expect(res => {
                assert.isString(testReq.name, 'it should be a string')
                assert.equal(false, res.body.success, 'should be success false')
            })
            .end((err) => {
                err ? done(err) : done()
            })
    })
})
describe('DELETE /cities', () => {
    it('should return success true and an object with _id property equal than params id', done => {
        let testId = '63861b58b6e0bee17235c5c1'
        let token = TEST_TOKEN
        request(app)
            .delete(`/api/cities/${testId}`)
            .set('Authorization', `bearer ${token}`)
            .expect(res => {
                assert.equal(true, res.body.success, 'success should be true')
                assert.equal(testId, res.body.response._id, 'params id should be equal to response _id')
            })
            .end((err, res) => {
                err ? done(err) : done()
            })
    })
})