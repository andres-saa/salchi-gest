import { defineStore } from "pinia";
import { URI } from "../service/conection";


export const useSitesCocinaStore = defineStore('site', {
   
    persist: {
       
                key: 'site', 
                storage: localStorage,
                paths:[
                    

                    ]
    },
    state: () => {

        return {

            site:{ site_id:1

            }


        }
    },

    getters: {
    
        
    },

   

    actions: {

       
     setSite(site_info){
        this.site= site_info
     }
    },


})


