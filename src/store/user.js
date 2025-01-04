import { defineStore } from "pinia";
import { URI } from "../service/conection";
import { jwtDecode } from "jwt-decode";



export const loginStore = defineStore('user', {
   
    persist: {
       
                key: 'user', // La clave bajo la cual se almacenará tu estado en el storage
                storage: localStorage,
                paths:[
                    'userData',
                    'currentSection_pqr',
                    'currentSection_users'
                    ]

        
    },
    state: () => {


        return {
            userData:{},
            NoAuthorized:false,
            currentSection_pqr:{
                name:'Basico',
                x:0
            },
            currentSection_users:{
                name:'Basico',
                x:0
            },
            
            
            
        }
    },

    getters: {
        
        rawUserData(){
          return  jwtDecode(this.userData.access_token)}
        
    },

   

    actions: {

        setUserData(user){
            this.userData=user
        }
       
    },


})


