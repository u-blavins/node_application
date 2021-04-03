import { getCloudformationClient } from '../../cloudformation/src/upload'

// jest.mock('@aws-sdk/client-cloudformation/commands/')

test('client is instantiated with correct region', async () => {
    let sut = await getCloudformationClient('eu-west-1')
    expect(await sut.config.region()).toEqual('eu-west-1')
})

