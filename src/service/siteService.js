
import { URI } from "./conection"
const siteService = {
    async getSites ()  {
        try {
            const response = await fetch(`${URI}/sites`)
            const data = response.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }
}



export {siteService}