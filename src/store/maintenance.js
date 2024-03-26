import { defineStore } from "pinia";
import { URI } from "../service/conection";
import { jwtDecode } from "jwt-decode";



export const maintenanceStore = defineStore('maintance', {
   
    persist: {
       
                key: 'maintance', // La clave bajo la cual se almacenará tu estado en el storage
                storage: localStorage,
                paths:[
                    'currentSite'
                    ]

        
    },
    state: () => {


        return {
            currentSite:{},
          
            
        }
    },

    getters: {
        
    
        
    },

   

    actions: {

        setCurrentSite(site){
            this.currentSite=site
        }
       
    },


})


