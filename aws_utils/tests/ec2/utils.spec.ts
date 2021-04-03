import { getEC2Client } from '../../ec2/src/utils'

describe('getEC2Client', () => {
    test('client is instantiated with correct region', async () => {
        let sut = await getEC2Client('eu-west-1')
        expect(await sut.config.region()).toEqual('eu-west-1')
    })

    test('client is instantiated with default region', async () => {
        let sut = await getEC2Client()
        expect(await sut.config.region()).toEqual('eu-west-2')
    })
})
