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
                    name:'light',
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
                    bg_bars:'background-color:rgb(255, 255, 255)',
                    hover:'background-color:#00000020',
                    button_down:'rgba(0, 0, 0, 0.45)',
                    gradient:'white'
                },


                dark: {
                    name:'dark',
                    bg: 'background-color:rgb(0 0 22)',
                    // bg:'background-color:white',
                    m_user: 'background-color: rgb(47, 47, 65);',
                    m_employer: 'background-color: rgb(10, 55, 68);',
                    // m_user:'background-color:white;',
                    // m_employer:'background-color: white;',
                    pico_user: 'color: rgb(10, 55, 68);',
                    pico_employer: 'color:  rgb(47, 47, 65); ',
                    text: 'color:white',
                    bg_bars:'background-color:rgba(255,255,255,.062)',
                    bg_image:'background-image: url(/images/message_backgroud_d.webp);',
                    border:'border:none',
                    hover:'background-color:#ffffff20',
                    button_down:'rgba(255, 255, 255,.3)',
                    gradient:'black'
                }
            },

            current_chat_theme: {
                    name:'light',
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
                    bg_bars:'background-color:rgb(255, 255, 255)',
                    hover:'background-color:#00000020',
                    gradient:'white'
                }
        };
    }
});
