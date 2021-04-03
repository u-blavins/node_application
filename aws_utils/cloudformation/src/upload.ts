import {
    CloudFormationClient,
    ListStacksCommand
} from '@aws-sdk/client-cloudformation'

/**
 * Create a cloudformation client with specified region
 * 
 * @param region AWS region to interact with
 * @returns Cloudformation client to talk directly to AWS
 */
const getCloudformationClient = async (region: string = 'eu-west-2') => {
    return new CloudFormationClient({ region })
}

/**
 * List all the stacks within a specific region based on region
 * 
 * @param client CloudFormation client for AWS SDk
 * @param params ListStacksCommandInput parameters
 * @returns Promise for all stacks within region
 */
const listAllStacks = async (client, params = {}) => {
    return client.send(new ListStacksCommand(params))
}

// template body
// async function createCloudFormationStack

const run = async () => {
    try {
        let cfClient = await getCloudformationClient('eu-west-1')
        // assert that client is set with correct region
        console.log(await cfClient.config.region())
        let data = await listAllStacks(cfClient)
        console.log(data)
    } catch (e) {
        console.log(e);
    }
}

export { getCloudformationClient, listAllStacks }