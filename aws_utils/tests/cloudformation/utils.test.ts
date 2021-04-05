import { mockClient } from 'aws-sdk-client-mock'
import { CloudFormationClient, ListStacksCommand } from '@aws-sdk/client-cloudformation'

import * as mockResponse from '../../stubs/listStacks.json'
import { getCloudformationClient } from '../../cloudformation/src/utils'

describe('CloudFormation Utilities Module', () => {
    let mockCloudformation, mockedClient, sut

    afterEach(() => { sut = null })

    beforeAll(() => {
        mockCloudformation = mockClient(CloudFormationClient)
        mockCloudformation
            .on(ListStacksCommand)
            .resolves(mockResponse)
        mockedClient = new CloudFormationClient({})
    })

    afterAll(() => {
        mockCloudformation.reset()
        mockedClient.destroy()
    })

    describe('getCloudFormationClient', () => {
        test('client is instantiated with correct region', async () => {
            sut = await getCloudformationClient('eu-west-1')
            expect(await sut.config.region()).toEqual('eu-west-1')
        })
    
        test('client is instantiated with default region', async () => {
            sut = await getCloudformationClient()
            expect(await sut.config.region()).toEqual('eu-west-2')
        })
    
        test('client returned is an Cl', async () => {
            sut = await getCloudformationClient()
            expect(sut).toEqual(expect.any(CloudFormationClient))
        })
    })
})
