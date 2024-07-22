import { defineStore } from "pinia";
import { URI } from "../../service/conection";


export const useDataToInteract = defineStore('dataToInteract', {
   
    persist: {
       
                key: 'dialogs', 
                // storage: localStorage,
                paths:[
                    

                    ]
    },
    state: () => {

        return {

            sesionToDelete:{},
            sesionToUpdate:{},


            sequenceToDelete:{},
            sequenceToUpdate:{},

            videoToDelete:{},
            videoToUpdate:{}
        }
    },

    getters: {
    
        
    },

   

    actions: {

       
    
    },


})


