import{H as n,j as s,U as o}from"./index-80a7e175.js";const a={store:n(),async getVideoSequencesBySesiond(){try{this.store.setLoading(!0,"Buscando cursos");const r=await s.get(`${o}/list-video-training-sequence-video`);return r.status===200?(this.store.setLoading(!1),r.data):(console.error("An error occurred while fetching the recipes:",r.status),this.store.setLoading(!1),null)}catch(r){return console.error("An error occurred while fetching the recipes:",r),this.store.setLoading(!1),null}},async getVideoSequencesBySesionId(r){try{this.store.setLoading(!0,"Buscando cursos");const e=await s.get(`${o}/list-video-training-sequence-video-by-sesion-id/${r}`);return e.status===200?(this.store.setLoading(!1),e.data):(console.error("An error occurred while fetching the recipes:",e.status),this.store.setLoading(!1),null)}catch(e){return console.error("An error occurred while fetching the recipes:",e),this.store.setLoading(!1),null}},async createSesion(r){this.store.setLoading(!0,"Creando una nueva escuela");try{const e=await s.post(`${o}/insert-video-training-sesion`,r);return e.status===200?(this.store.setLoading(!1),e.data):(this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e.status),null)}catch(e){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e),null}},async createSequence(r){this.store.setLoading(!0,"Creando un nuevo curso");try{const e=await s.post(`${o}/insert-video-training-sequence`,r);return e.status===200?(this.store.setLoading(!1),e.data):(this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e.status),null)}catch(e){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e),null}},async createVideo(r){this.store.setLoading(!0,"Creando un nuevo curso");try{const e=await s.post(`${o}/insert-video-training`,r);return e.status===200?(this.store.setLoading(!1),e.data):(this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e.status),null)}catch(e){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e),null}},async updateVideo(r,e){this.store.setLoading(!0,"actualizando video");try{const t=await s.put(`${o}/update-video-training/${r}`,e);return t.status===200?(this.store.setLoading(!1),t.data):(this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",t.status),null)}catch(t){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",t),null}},async updateSesion(r,e){this.store.setLoading(!0,"Actualizando escuela");try{const t=await s.put(`${o}/update-video-training-sesion/${r}`,e);return t.status===200?(this.store.setLoading(!1),t.data):(this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",t.status),null)}catch(t){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",t),null}},async updateSequence(r,e){try{this.store.setLoading(!0,"Actualizando curso");const t=await s.put(`${o}/update-video-training-sequence-video/${r}`,e);return t.status===200?(this.store.setLoading(!1),t.data):(this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",t.status),null)}catch(t){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",t),null}},async deleteSesion(r){this.store.setLoading(!0,"Borrando Escuela");try{const e=await s.delete(`${o}/delete-video-training-sesion/${r}`);return e.status===200?(this.store.setLoading(!1),e.data):(console.error("An error occurred while fetching the recipes:",e.status),this.store.setLoading(!1),null)}catch(e){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e),null}},async deleteSequence(r){this.store.setLoading(!0,"Borrando Curso");try{const e=await s.delete(`${o}/delete-video-training-sequence/${r}`);return e.status===200?(this.store.setLoading(!1),e.data):(this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e.status),null)}catch(e){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e),null}},async deleteVideo(r){this.store.setLoading(!0,"Borrando clase");try{const e=await s.delete(`${o}/delete-video-training/${r}`);return e.status===200?(this.store.setLoading(!1),e.data):(this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e.status),null)}catch(e){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e),null}},async getVideos(){this.store.setLoading(!0,"ccargando clases");try{const r=await s.get(`${o}/list-video`);return r.status===200?(this.store.setLoading(!1),r.data):(this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",r.status),null)}catch(r){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",r),null}},async getVideosBySequenceId(r){try{this.store.setLoading(!0,"cargando clases");const e=await s.get(`${o}/list-video-by-sequence-id/${r}`);return e.status===200?(this.store.setLoading(!1),e.data):(console.error("An error occurred while fetching the recipes:",e.status),this.store.setLoading(!1),null)}catch(e){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",e),null}},async getSesions(){try{this.store.setLoading(!0,"cargando Escuelas");const r=await s.get(`${o}/list-video-training-sesion`);return r.status===200?(this.store.setLoading(!1),r.data):(this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",r.status),null)}catch(r){return this.store.setLoading(!1),console.error("An error occurred while fetching the recipes:",r),null}}};export{a as v};
