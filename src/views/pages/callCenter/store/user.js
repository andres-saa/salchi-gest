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
                payment_method_option:'',
                site: {
                    "site_id": 33,
                    "site_name": "UNION CITY",
                    "site_address": "2100 kerrigan ave union city nj 07087",
                    "pe_site_id": 16,
                    "location": {
                        "lat": 40.76808,
                        "long": -74.03843
                    }
                },
                
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


