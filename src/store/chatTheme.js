import { defineStore } from 'pinia';
// import { URI } from "../service/conection";

export const chatThemeStore = defineStore('chat-theme2sd', {
    persist: {
        key: 'theme2sd',
        storage: localStorage,
        paths: [ 'current_chat_theme']
    },
    state: () => {
        return {
            themes: {
                light: {
                    bg: 'background-color:rgb(255, 255, 255)',
                    // bg:'background-color:white',
                    m_user: 'background-color: rgb(255, 255, 255);',
                    m_employer: 'background-color: #d9fdd3;',
                    // m_user:'background-color:white;',
                    // m_employer:'background-color: white;',
                    pico_user: 'color: rgb(255, 255, 255);',
                    pico_employer: 'color: #d9fdd3; ',
                    text: 'color:black',
                    bg_image:'background-image: url(/images/message_backgroud_l.webp);',
                    bg_bars:'background-color:rgb(255, 255, 255)'
                },


                dark: {
                    bg: 'background-color:rgb(0 0 22)',
                    // bg:'background-color:white',
                    m_user: 'background-color: rgb(47, 47, 65);',
                    m_employer: 'background-color: rgb(10, 55, 68);',
                    // m_user:'background-color:white;',
                    // m_employer:'background-color: white;',
                    pico_user: 'color: rgb(10, 55, 68);',
                    pico_employer: 'color:  rgb(47, 47, 65); ',
                    text: 'color:white',
                    bg_image:'background-image: url(/images/message_backgroud_d.webp);'
                }
            },

            current_chat_theme: {
                
            }
        };
    }
});
