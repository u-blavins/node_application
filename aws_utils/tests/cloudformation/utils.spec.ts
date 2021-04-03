import { getCloudformationClient } from '../../cloudformation/src/utils'

describe('getCloudFormationClient', () => {
    test('client is instantiated with correct region', async () => {
        let sut = await getCloudformationClient('eu-west-1')
        expect(await sut.config.region()).toEqual('eu-west-1')
    })

    test('client is instantiated with default region', async () => {
        let sut = await getCloudformationClient()
        expect(await sut.config.region()).toEqual('eu-west-2')
    })

    test('test', async () => {
        let sut = await getCloudformationClient('us-west-7')
        expect(await sut.config.region()).toEqual('us-west-7')
    })
})
