import{U as e}from"./index-f46c65fd.js";const a={async getSites(){try{return(await fetch(`${e}/sites`)).json()}catch(s){console.log(s)}},async siteDirectory(s){try{return(await fetch(`${e}/site/${s}/all-details`)).json()}catch(t){console.log(t)}}};export{a as s};