import { defineStore } from "pinia";
import { URI } from "../../service/conection";


export const useDialogStore = defineStore('dialogs', {
   
    persist: {
       
                key: 'dialogs', 
                // storage: localStorage,
                paths:[
                    

                    ]
    },
    state: () => {

        return {



       
                addSesion:false,
                deleteSesion:false,
                updateSesion:false,



                addSequence:false,
                deleteSequence:false,
                updateSequence:false,
        

                
                addVideo:false,
                deleteVideo:false,
                updateVideo:false,

                showSequenceStudents:false,
                showvideoStudents:false


          


        }
    },

    getters: {
    
        
    },

   

    actions: {

       
    
    },


})


