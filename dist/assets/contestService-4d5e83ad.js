import{l,H as o,j as t,U as a}from"./index-9ac1edba.js";const d={async getAllContest(){const r=l().rawUserData.id,e=o();try{e.setLoading(!0,"cargango consursos");const n=await t.get(`${a}/contests/${r}`);return n.status===200?(e.setLoading(!1,"cargango consursos"),n.data):(e.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",n.status),null)}catch(n){return e.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",n),null}},async getAllContestAll(){const r=l().rawUserData.id,e=o();try{e.setLoading(!0,"cargango consursos");const n=await t.get(`${a}/contests_all/${r}`);return n.status===200?(e.setLoading(!1,"cargango consursos"),n.data):(e.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",n.status),null)}catch(n){return e.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",n),null}},async getParticipationByUserId(s,r){l();const e=o();try{e.setLoading(!0,"cargango evidencias");const n=await t.get(`${a}/user-contest-participation/${r}/${s}`);return n.status===200?(e.setLoading(!1,"cargango consursos"),n.data):(e.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",n.status),null)}catch(n){return e.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",n),null}},async getContestEntryOption(){l();const s=o();try{s.setLoading(!0,"cargango evidencias");const r=await t.get(`${a}/contest_entry_option`);return r.status===200?(s.setLoading(!1,"cargango consursos"),r.data):(s.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",r.status),null)}catch(r){return s.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",r),null}},async createContest(s){const r=o();try{r.setLoading(!0,"Creando concurso");const e=await t.post(`${a}/contest`,s);return e.status===200?(r.setLoading(!1,"cargango consursos"),e.data):(r.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return r.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",e),null}},async updateContest(s){const r=o();try{r.setLoading(!0,"actualizando concurso");const e=await t.put(`${a}/contest`,s);return e.status===200?(r.setLoading(!1,"cargango consursos"),e.data):(r.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",e.status),null)}catch(e){return r.setLoading(!1,"cargango consursos"),console.error("An error occurred while fetching the ingredients:",e),null}},async sendEvidence(s){const r=o();r.setLoading(!0,"enviando evidencia");try{const e=await t.post(`${a}/contest-entry/`,s);return e.status===200?(r.setLoading(!1,"enviando evidencia"),e.data):(console.error("An error occurred while preparing the order:",e.status),r.setLoading(!1,"enviando evidencia"),null)}catch(e){return console.error("An error occurred while preparing the order:",e),r.setLoading(!1,"enviando evidencia"),null}},async contestToggleVisible(s,r){const e=o();try{const n=await t.put(`${a}/contest_toggle_visible/status/${s}/id/${r}`);return n.status===200?(e.setLoading(!1,"enviando evidencia"),n.data):(console.error("An error occurred while preparing the order:",n.status),e.setLoading(!1,"enviando evidencia"),null)}catch(n){return console.error("An error occurred while preparing the order:",n),e.setLoading(!1,"enviando evidencia"),null}},async deleteContest(s){const r=o();r.setLoading(!0,"Eliminando concurso");try{const e=await t.delete(`${a}/delete-contest/${s}`);return e.status===200?(r.setLoading(!1,"borrando concurso"),e.data):(console.error("An error occurred while preparing the order:",e.status),r.setLoading(!1,"enviando evidencia"),null)}catch(e){return console.error("An error occurred while preparing the order:",e),r.setLoading(!1,"enviando evidencia"),null}},async sendContestImage(s,r,e,n){const i=o();i.setLoading(!0,"Subiendo imagen");try{const c=new FormData;c.append("file",n);const g=await t.post(`${a}/upload-constest-image/${s}/${r}/${e}`,c,{headers:{"Content-Type":"multipart/form-data"}});return g.status===200?(i.setLoading(!1,"Imagen subida con éxito"),g.data):(console.error("Error al subir la imagen:",g.status),i.setLoading(!1,"Error al subir la imagen"),null)}catch(c){return console.error("Error al subir la imagen:",c),alert(c.response.data.detail),i.setLoading(!1,"Error al subir la imagen"),null}}};export{d as c};