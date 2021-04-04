import { EC2Client, DescribeRegionsCommand, DescribeRegionsCommandInput } from '@aws-sdk/client-ec2'

import { isAvailableRegion } from '../../common/src/utils'

/**
 * Create a ec2 client with specified region
 * 
 * @param region AWS region to interact with
 * @returns EC2 client to talk directly to AWS
 */
 const getEC2Client = async (region: string = 'eu-west-2')  => {
    return new EC2Client({ region })
}

/**
 * Describe all regions that are available for use within
 * the AWS environment
 * 
 * @param client EC2 client used for making API call
 * @param params any DescribeRegionsCommandInput params
 * @returns List of regions with descriptions (Endpoints,
 *          Region Name, OptInStatus)
 */
const describeRegions = async (client: EC2Client, params: DescribeRegionsCommandInput = {}) => {
    return await client.send(new DescribeRegionsCommand(params))
}

/**
 * Get a list of availbale region names within the
 * AWS environment
 * 
 * @param client EC2 client used for making API call
 * @returns List of available AWS regions
 */
const getAvailableRegions = async (client: EC2Client) => {
    let data = await describeRegions(client, {AllRegions: true})
    return Array.from(data.Regions, r => r.RegionName)
}

/**
 * Get a list of availbale EC2 region endpoints within the
 * AWS environment
 * 
 * @param client EC2 client used for making API call
 * @returns List of available AWS EC2 region endpoints
 */
 const getAvailableEC2RegionEndpoints = async (client: EC2Client) => {
    let data = await describeRegions(client, {AllRegions: true})
    return Array.from(data.Regions, region => region.Endpoint)
}

export { getEC2Client, describeRegions, getAvailableRegions, getAvailableEC2RegionEndpoints }
