import { mockClient } from 'aws-sdk-client-mock'
import { EC2Client, DescribeRegionsCommand } from '@aws-sdk/client-ec2'

import * as mockResponse from '../../stubs/describeRegions.json'
import { 
    getEC2Client, 
    describeRegions, 
    getAvailableRegions,
    getAvailableEC2RegionEndpoints
} from '../../ec2/src/utils'

describe('EC2 Utilities Module', () => {
    let mockEC2, mockedClient, sut

    afterEach(() => {
        sut = null
    })
    
    beforeAll(() => {
        mockEC2 = mockClient(EC2Client)
        mockEC2
            .on(DescribeRegionsCommand)
            .resolves(mockResponse)
        mockedClient = new EC2Client({})
    })

    afterAll(() => {
        mockEC2.reset()
        mockedClient.destroy()
    })

    describe('getEC2Client', () => {
        test('client is instantiated with correct region', async () => {
            sut = await getEC2Client('eu-west-1')
            expect(await sut.config.region()).toEqual('eu-west-1')
        })
    
        test('client is instantiated with default region', async () => {
            sut = await getEC2Client()
            expect(await sut.config.region()).toEqual('eu-west-2')
        })

        test('client returned is an EC2Client', async () => {
            sut = await getEC2Client()
            expect(sut).toEqual(expect.any(EC2Client))
        })

    })

    describe('describeRegions', () => { 
        test('returns an object containing region information', async () => {
            sut = await describeRegions(mockedClient)
            expect(sut.Regions).toHaveLength(3)
            expect(sut).toStrictEqual(expect.any(Object))
        })
    
        test('returns correct array of region info', async () => {
            sut = await describeRegions(mockedClient)
            let expectedOne   = mockResponse.Regions[0]
            let expectedTwo   = mockResponse.Regions[1]
            let expectedThree = mockResponse.Regions[2]
            expect(sut.Regions).toContain(expectedOne)
            expect(sut.Regions).toContain(expectedTwo)
            expect(sut.Regions).toContain(expectedThree)
        })

        test('returns names with params set', async () => {
            sut = await describeRegions(mockedClient, {AllRegions: true})
            expect(sut.Regions).toHaveLength(3)
            expect(sut.Regions).toStrictEqual(expect.any(Array))
        })
    })
    
    describe('getAvailableRegions', () => {
        test('returns an array of regions names', async () => {
            sut = await getAvailableRegions(mockedClient)
            let expected = ['this-test-1', 'this-test-2', 'this-test-3']
            expect(sut).toHaveLength(3)
            expect(sut).toStrictEqual(expect.any(Array))
            expect(sut).toEqual(expected)
        })
    })

    describe('getAvailableEC2RegionEndpoints', () => {
        test('returns an array of regions names', async () => {
            sut = await getAvailableEC2RegionEndpoints(mockedClient)
            let expected = [ 'ec2.this-test-1.amazon.aws.com', 
                'ec2.this-test-2.amazon.aws.com', 'ec2.this-test-3.amazon.aws.com']
            expect(sut).toHaveLength(3)
            expect(sut).toStrictEqual(expect.any(Array))
            expect(sut).toEqual(expected)
        })
    })
})
