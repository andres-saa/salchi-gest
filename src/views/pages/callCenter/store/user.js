import { defineStore } from "pinia";
// import { URI } from "../service/conection";


export const useUserStore = defineStore('client', {
   
    persist: {
       
                key: 'client', 
                storage: localStorage,
                paths:[
                    'user'

                    ]
    },
    state: () => {

        return {
            user: {
                name:'',
                neigborhood:'',
                address:'',
                phone_number:'',
                payment_method_option:''
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


