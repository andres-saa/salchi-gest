import { defineStore } from "pinia";
import { URI } from "@/service/conection";
import axios from "axios";




export const useSitesStore = defineStore('call-center-site-44', {
   
    persist: {
       
                key: 'call-center-site', 
                storage: localStorage,
                paths:[
                    'location',
                    'restaurant',
                    'categories',
                    'current_delivery'
                    ]
    },
    state: () => {

        return {

            location: {
                site:{},
                neigborhood:{}
            },
            visibles: {
                currentSite: false
            },
            current_delivery:0,
     
            status:'closed',
            restaurant:1,
            categories:[                10, //COMBOS 2 PERSONAS
                26, //COMBOS PERSONALES
                // 25, //COMBOS 2X1 BURGER + PAPAS
                8, //SALCHIPAPAS 2 PERSONAS
                9, //SALCHIPAPAS PERSONALES
                13, //PRODUCTO NUEVO
                27, //POLLO
               11,   //SHOWW
                4, //BEBIDAS
                5, //CERVEZAS
                // 14,//ADICIONES SALCHIPAPAS  110, // SALCHIPAPA PARA 2 PERSONAS NJ
  112, // SALCHIPAPAS PERSONALES NJ
  113,  // PARA COMPARTIR
  111, // BURGERMONSTER
  109, // BEBIDAS 
  ]

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

        setLocation(location){
            this.location = location
        },
        setVisible(item,status){
            this.visibles[item]=status
        },
   
        async setNeighborhoodPrice(){
       
                try {
                    const response = await axios.get(`${URI}/neighborhood/${this.location?.neigborhood?.neighborhood_id}/`);
                    if (response.status === 200) {
                        this.location.neigborhood = response.data
                        return response.data;
                    } else {
                        console.error('An error occurred while fetching the ingredients:', response.status);
                        return null;
                    }
                } catch (error) {
                    console.error('An error occurred while fetching the ingredients:', error);
                    return null;
                }
      
        },
        async setNeighborhoodPriceCero(){
       
           this.location.neigborhood.delivery_price = 0
    }




    },


})


