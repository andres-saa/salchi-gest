import { defineStore } from 'pinia';
// import { URI } from "../service/conection";

export const chatThemeStore = defineStore('chat-themes', {
    persist: {
        key: 'clientes',
        storage: localStorage,
        paths: ['themes', 'current_chat_theme']
    },
    state: () => {
        return {
            theme: {
                light: {},
                dark: {
                    bg: 'background-color:rgb(0 0 22)',
                    // bg:'background-color:white',
                    m_user: 'background-color: rgb(47, 47, 65);',
                    m_employer: 'background-color: rgb(10, 55, 68);',
                    // m_user:'background-color:white;',
                    // m_employer:'background-color: white;',
                    pico_user: 'color: rgb(10, 55, 68);',
                    pico_employer: 'color:  rgb(47, 47, 65); ',
                    text: 'color:white'
                }
            },

            current_chat_theme: {
                bg: 'background-color:rgb(0 0 22)',
                // bg:'background-color:white',
                m_user: 'background-color: rgb(47, 47, 65);',
                m_employer: 'background-color: rgb(10, 55, 68);',
                // m_user:'background-color:white;',
                // m_employer:'background-color: white;',
                pico_user: 'color: rgb(10, 55, 68);',
                pico_employer: 'color:  rgb(47, 47, 65); ',
                text: 'color:white'
            }
        };
    }
});
