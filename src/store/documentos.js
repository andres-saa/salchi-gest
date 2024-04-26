import { defineStore } from "pinia";
import { URI } from "../service/conection";





export const useDocumentsStore = defineStore('documentos', {
   
    persist: {
       
                key: 'documentos', // La clave bajo la cual se almacenará tu estado en el storage
                storage: localStorage,
                paths:[
                    'currentSite'
                    ]

        
    },
    state: () => {


        return {
            currentSite:{}
            
        }
    },

    getters: {
        
        
    },

   

    actions: {

        setSite(site){
            this.currentSite=site
        }
       
    },


})


