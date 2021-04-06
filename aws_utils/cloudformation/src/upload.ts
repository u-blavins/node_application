import { getCloudformationClient, listAllStacks } from './utils'

// template body
// async function createCloudFormationStack

const run = async () => {
    try {
        let client = await getCloudformationClient('eu-west-2')
        let data = await listAllStacks(client)
        console.log(data)
    } catch (e) {
        console.log(e);
    }
}
