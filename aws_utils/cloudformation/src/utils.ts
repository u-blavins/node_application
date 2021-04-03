import { CloudFormationClient } from '@aws-sdk/client-cloudformation'

/**
 * Create a cloudformation client with specified region
 * 
 * @param region AWS region to interact with
 * @returns Cloudformation client to talk directly to AWS
 */
 const getCloudformationClient = async (region: string = 'eu-west-2') => {
    return new CloudFormationClient({ region })
}

export { getCloudformationClient }
