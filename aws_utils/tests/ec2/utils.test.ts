import { mockClient } from 'aws-sdk-client-mock'

import { getEC2Client, describeRegions } from '../../ec2/src/utils'
import { EC2Client, DescribeRegionsCommand } from '@aws-sdk/client-ec2'

describe('getEC2Client', () => {
    test('client is instantiated with correct region', async () => {
        let sut = await getEC2Client('eu-west-1')
        expect(await sut.config.region()).toEqual('eu-west-1')
    })

    test('client is instantiated with default region', async () => {
        let sut = await getEC2Client()
        expect(await sut.config.region()).toEqual('eu-west-2')
    })

    test('test', async () => {
        let sut = await getEC2Client('us-west-7')
        expect(await sut.config.region()).toEqual('us-west-7')
    })
})

describe('describeRegions', () => {
    let mockEC2 = null

    beforeAll(() => {
        mockEC2 = mockClient(EC2Client)
        mockEC2
            .on(DescribeRegionsCommand)
            .resolves({Regions: [
                    {RegionName: 'test-r', Endpoint: 'test-e'}
                ]})
    })

    test('does this work', async () => {
        let client = new EC2Client({})
        let sut = await describeRegions(client)
        expect(sut.length).toEqual(1)
        expect(sut).toEqual([{RegionName: 'test-r', Endpoint: 'test-e'}])
    })
})
