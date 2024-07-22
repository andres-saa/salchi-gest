import axios from "axios";
import { URI } from "../conection";



export const urlService = {

    getThumbnail(videoLink) {
        if (!videoLink) {
            return '';
        }
    
        const match = videoLink.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\?.*)?/);
    
        if (match && match[1]) {
            const videoId = match[1];
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            return thumbnailUrl;
        } else {
            console.error("La URL del video no es válida: ", videoLink);
            return '';
        }
    },


        ValidateThumbnail(videoLink) {
            if (!videoLink){
                return null
            }
            const match = videoLink.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\?.*)?/);
    
            if (match && match[1]) {
                const videoId = match[1];
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                return thumbnailUrl;
            } else {
                console.error("La URL del video no es válida: ", videoLink);
                alert(`rl invalida ${videoLink}`)
                return null
            }
        }

};