import { defineStore } from "pinia";
import { URI } from "../service/conection";


export const useRoleStore = defineStore('role', {
   
    persist: {
       
                key: 'site', 
                storage: localStorage,
                paths:[
            

                    ]
    },
    state: () => {

        return {

            roles:{

            }


        }
    },

    getters: {
    
        
    },

   

    actions: {
     setRole(roles){
        this.roles= roles
     }
    },


})


