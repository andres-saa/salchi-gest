import{U as e}from"./index-9ac1edba.js";const a={async getSites(){try{return(await fetch(`${e}/sites`)).json()}catch(t){console.log(t)}},async getSiteById(t){try{return(await fetch(`${e}/site/${t}`)).json()}catch(s){console.log(s)}},async siteDirectory(t){try{return(await fetch(`${e}/site/${t}/all-details`)).json()}catch(s){console.log(s)}}};export{a as s};