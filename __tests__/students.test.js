const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../models');

const dummyData = {
    name : 'Danang Tejo',
    date_of_birth : '1997-03-15'
}


describe('POST /students', () => {
    it('should send response with 201 status code', (done) => {
        request(app)
        .post('/students')
        .send(dummyData)
        .end(function(err, res){
            if(err) done(err);

            expect(res.status).toEqual(201);
            expect(typeof res.body).toEqual("object")
            expect(res.body).toHaveProperty("id");
            expect(res.body).toHaveProperty("name");
            expect(res.body).toHaveProperty("date_of_birth");
            expect(res.body.name).toEqual(dummyData.name);
            expect(res.body.date_of_birth).toEqual(dummyData.date_of_birth);
            done();
        })
    })
})

describe('POST /students', () => {
    it('should send response with 400 status code', (done) => {
        request(app)
        .post('/students')
        .send({})
        .end(function(err, res){
            if(err) done(err);

            expect(res.status).toEqual(400);
            done();
        })
    })
})

describe('GET /students', () => {
    it('should send response with 200 status code', (done) => {
        request(app)
        .get('/students')
        .send()
        .end(function(err, res){
            if(err) done(err);

            expect(res.status).toEqual(200);
            expect(typeof res.body).toEqual("array")
            done();
        })
    })
})


describe('GET /students?parent=asdwa', () => {
    it('should send response with 400 status code', (done) => {
        request(app)
        .get('/students?parent=asdfw')
        .send()
        .end(function(err, res){
            if(err) done(err);

            expect(res.status).toEqual(400);
            done();
        })
    })
})



describe('GET /students/:id', () => {
    it('should send response with 200 status code', (done) => {
        request(app)
        .get('/students/1')
        .send()
        .end(function(err, res){
            if(err) done(err);

            expect(res.status).toEqual(200);
            expect(typeof res.body).toEqual("object")
            expect(res.body).toHaveProperty("id");
            expect(res.body).toHaveProperty("name");
            expect(res.body).toHaveProperty("date_of_birth");
            expect(res.body.name).toEqual(dummyData.name);
            expect(res.body.date_of_birth).toEqual(dummyData.date_of_birth);
            done();
        })
    })
})

describe('GET /students/:id', () => {
    it('should send response with 404 status code', (done) => {
        request(app)
        .get('/students/-1')
        .send()
        .end(function(err, res){
            if(err) done(err);

            expect(res.status).toEqual(404);
            done();
        })
    })
})

afterAll((done) => {
    sequelize.queryInterface.bulkDelete('students',{})
    .then(() => {
        return done();
    })
    .catch(err => {
        done(err);
    })
})