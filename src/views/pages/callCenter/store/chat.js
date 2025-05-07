import { defineStore } from "pinia";
// import { URI } from "../service/conection";


export const useChatsStore = defineStore('client', {
   
    persist: {
       
                key: 'client', 
                storage: localStorage,
                paths:[
                    'user','last_messages'

                    ]
    },
    state: () => {

        return {
            last_messages:{
                "3226892988":[
                    {
                        "user_id": 10,
                        "nombre": "andres saa",
                        "fecha_ultimo_mensaje": "12/04/2025",
                        "hora_ultimo_mensaje": "08:01 PM",
                        "abreviatura": "hoy",
                        "mensaje_truncado": "nuevo mensaje brother",
                        "wa_id": "573226892988"
                    },
                    {
                        "user_id": 11,
                        "nombre": "Kathe 😉",
                        "fecha_ultimo_mensaje": "10/04/2025",
                        "hora_ultimo_mensaje": "08:41 PM",
                        "abreviatura": "anteayer",
                        "mensaje_truncado": "Mi amor precioso",
                        "wa_id": "573225958424"
                    }
                ]
            },
            messages:{
                hola:{
                    
                }

            },
           
        }
    },

    getters: {
        fucion: (state) => {
            return 0
        }
    },

    actions: {

        async func() {
            return func
        },

    },


})


