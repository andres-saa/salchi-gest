
import { useRoute } from "vue-router"



export const PathService = {
   

    isActiveRoute (route) {
        const router = useRoute()
        return router.path == route
    }
}