import { mockClient } from 'aws-sdk-client-mock'
import { EC2Client, DescribeRegionsCommand } from '@aws-sdk/client-ec2'

import * as mockResponse from '../../stubs/describeRegions.json'
import { 
    getEC2Client, 
    describeRegions, 
    getAvailableRegions 
} from '../../ec2/src/utils'

describe('getEC2Client', () => {
    let sut

    afterAll(() => {
        sut = null
    })

    test('client is instantiated with correct region', async () => {
        sut = await getEC2Client('eu-west-1')
        expect(await sut.config.region()).toEqual('eu-west-1')
    })

    test('client is instantiated with default region', async () => {
        sut = await getEC2Client()
        expect(await sut.config.region()).toEqual('eu-west-2')
    })

    test('test', async () => {
        sut = await getEC2Client('us-west-7')
        expect(await sut.config.region()).toEqual('us-west-7')
    })
})

describe('describeRegions', () => {
    let mockEC2, mockedClient, sut

    beforeAll(() => {
        mockEC2 = mockClient(EC2Client)
        mockEC2.on(DescribeRegionsCommand).resolves(mockResponse)
        mockedClient = new EC2Client({})
    })

    afterAll(() => {
        mockEC2.reset()
        mockedClient.destroy()
    })

    afterEach(() => {
        sut = null
    })

    test('returns an array of regions info', async () => {
        sut = await describeRegions(mockedClient)
        expect(sut).toHaveLength(3)
        expect(sut).toStrictEqual(expect.any(Array))
    })

    test('returns an correct region info', async () => {
        sut = await describeRegions(mockedClient)
        let expectedOne   = mockResponse.Regions[0]
        let expectedTwo   = mockResponse.Regions[1]
        let expectedThree = mockResponse.Regions[2]
        expect(sut).toContain(expectedOne)
        expect(sut).toContain(expectedTwo)
        expect(sut).toContain(expectedThree)
    })
})

describe('getAvailableRegions', () => {
    
})