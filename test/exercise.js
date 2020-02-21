import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../index'
import faker from 'faker'

chai.use(chaiHttp)

describe('GET /api/exercises', () => {
    it('should GET all exercisess', (done) => {
        chai.request(app)
            .get('/api/exercises')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).be.a('array')
                expect(res.body).not.have.lengthOf(0)
                done()
            })
    })
})