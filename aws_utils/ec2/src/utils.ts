import {
    EC2Client
} from '@aws-sdk/client-ec2'

/**
 * Create a ec2 client with specified region
 * 
 * @param region AWS region to interact with
 * @returns EC2 client to talk directly to AWS
 */
const getEC2Client = async (region: string = 'eu-west-2') => {
    return new EC2Client({ region })
}

export { getEC2Client }
