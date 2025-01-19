import { defineStore } from "pinia";
import { URI } from "../service/conection";


export const useSitesStore = defineStore('site', {
   
    persist: {
       
                key: 'site', 
                storage: localStorage,
                paths:[
                    'site',
                    'restaurant'
                    ]
    },
    state: () => {

        return {

            site:{

            },
            visibles: {
                currentSite: false,
                sonandoCurrentSite:false
            },
            restaurant:1
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


