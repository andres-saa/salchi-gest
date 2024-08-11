import { defineStore } from "pinia";
import { URI } from "../../service/conection";


export const useAppStore = defineStore('version-store', {
   
    persist: {
       
                key: 'version-store', 
                // storage: localStorage,
                paths:[
                        'version_store'
                    ]
    },
    state: () => {

        return {

            version_store:0.1
 
        }
    },

    getters: {
    
        
    },

   

    actions: {

       
    
    },


})


