import { getEC2Client, getAvailableRegions } from '../../ec2/src/utils'

/**
 * Determines if region is valid for AWS API usage
 * 
 * @param regionName name of the region that is being used for a client
 * @returns Boolean based on whether region is valid
 */
const isAvailableRegion = async (regionName: string) => {
    let client = await getEC2Client(regionName)
    let regions = await getAvailableRegions(client)
    client.destroy()
    return regions.includes(regionName)
}

export { isAvailableRegion }