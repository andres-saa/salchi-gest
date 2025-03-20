import { defineStore } from "pinia";
// import { URI, URI_SOCKET } from "@/service/conection";
import { orderService } from "@/service/cocina/orderService";
import { useSitesCocinaStore } from "./siteCocina";




export const useOrderStore = defineStore('cart', {
    persist: {
        key: 'order',
        storage: localStorage,
        paths: [
            'currentCountOrders',
            'numberCancellationRequests'
        ]

    },
    state: () => ({
        currentOrder: {},
        visibles: {
            currentOrder: false,
            currentOrderDistri:false
        },
        TodayOrders: [],
        Notification: new Audio('/sound/pip.mp3'),
        webSocket: null,
        currentCountOrders:0,
        last_order_id:0,
        currentSearchingOrder:{},
        numberCancellationRequests:0,
        numberTransferRequests:0,
        numberPqrId:0,


    }),

    getters: {



    },
    actions: {
        setVisible(item, status) {
            this.visibles[item] = status;
        },

        setOrder(order) {
            this.currentOrder = order;
        },

        async getTodayOrders() {
            const siteStore = useSitesCocinaStore();
            if (siteStore.site.site_id) {
                this.TodayOrders = await orderService.getOrdersBySite(siteStore.site.site_id);
            }
        },

        async updateTodayOrders() {
            const siteStore = useSitesCocinaStore();
            if (siteStore.site.site_id) {
                this.TodayOrders = await orderService.UpdateOrdersBySite(siteStore.site.site_id);
            }
        },

        startOrderUpdates() {
            this.interval = setInterval(() => {
                this.updateTodayOrders();
            }, 10000); // 10 seconds
        },

        stopOrderUpdates() {
            clearInterval(this.interval);
        }
    }
    }




);
