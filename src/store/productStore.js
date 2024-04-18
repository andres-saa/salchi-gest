import { defineStore } from "pinia";
import { URI } from "../service/conection";


export const useProductStore = defineStore('product', {

    persist: {

        key: 'product',
        storage: localStorage,
        paths: []
    },

    state: () => {
        return {
            currentProductToEdit: {
            },
            visibles: {
                dialogEditProduct: false
            }
        }
    },

    getters: {
    },

    actions: {
    },


})


