const r={getThumbnail(t){if(!t)return"";const e=t.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)(?:\S*)?/);return e&&e[1]?`https://img.youtube.com/vi/${e[1]}/maxresdefault.jpg`:(console.error("La URL del video no es válida: ",t),"")},ValidateThumbnail(t){if(!t)return null;const e=t.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)(?:\S*)?/);return e&&e[1]?`https://img.youtube.com/vi/${e[1]}/maxresdefault.jpg`:(console.error("La URL del video no es válida: ",t),alert(`rl invalida ${t}`),null)}};export{r as u};