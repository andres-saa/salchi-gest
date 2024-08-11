import { defineStore } from "pinia";
import { URI } from "../../service/conection";


export const useAppStore = defineStore('app-store', {
   
    persist: {
       
                key: 'app-store', 
                // storage: localStorage,
                paths:[
                        'version'
                    ]
    },
    state: () => {

        return {

            version:0
 
        }
    },

    getters: {
    
        
    },

   

    actions: {

       
    
    },


})


