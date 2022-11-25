const { assert } = require('chai')
const request = require('supertest')
const app = require('../app')
const { Device } = require('../db/models');

const identifierTest = "NEW123456789";

describe('Devices', function () {
    let deviceId
    let crearDatosTest = async function () {
        var deviceCreado = await Device.create({
            identifier: identifierTest
        })
        deviceId = deviceCreado.id;
    }
    before(crearDatosTest);
    after(async function () {
        await Device.destroy({
            where: { id: deviceId },
        })
    });
    it('GET/devices', async function () {
        return request(app)
            .get('/devices')
            .then(res => {
                assert.equal(res.status, 200);
            })
    })
})