import { defineStore } from "pinia";
import { URI } from "../service/conection";


export const useSitesStore = defineStore('site', {
   
    persist: {
       
                key: 'site', 
                storage: localStorage,
                paths:[
                    'site'

                    ]
    },
    state: () => {

        return {

            site:{

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


