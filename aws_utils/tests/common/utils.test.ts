import { mockClient } from 'aws-sdk-client-mock'
import { EC2Client, DescribeRegionsCommand } from '@aws-sdk/client-ec2' 

import * as mockResponse from '../../stubs/describeRegions.json'
import { isAvailableRegion } from '../../common/src/utils'

describe('Common Utilities Module', () => {
    let mockEC2, sut

    beforeAll(() => {
        mockEC2 = mockClient(EC2Client)
        mockEC2
            .on(DescribeRegionsCommand, {AllRegions: true})
            .resolves(mockResponse)
    })

    afterAll(() => {
        mockEC2.reset()
    })

    describe('isAvailableRegion', () => {
        test('region that is available returns false', async () => {
            sut = await isAvailableRegion('eu-west-2')
            expect(sut).toBeFalsy()
        })

        test('region that is not available returns false', async () => {
            sut = await isAvailableRegion('this-test-1')
            expect(sut).toBeTruthy()
        })
    })
})
