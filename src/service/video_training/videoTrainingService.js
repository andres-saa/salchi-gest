import axios from "axios";
import { URI } from "../conection";
import { useReportesStore } from "../../store/reportes";




export const videoSequenceService = {


    store:useReportesStore(),

    async getVideoSequencesBySesion() {
        try {
            this.store.setLoading(true,'Buscando cursos')
            const response = await axios.get(`${URI}/list-video-training-sequence-video`);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                console.error('An error occurred while fetching the recipes:', response.status);
                this.store.setLoading(false)
                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the recipes:', error);
            this.store.setLoading(false)
            return null;
        }
    },

    async getVideoSequencesBySesionId(sesion_id) {
        try {
            this.store.setLoading(true,'Buscando cursos')
            const response = await axios.get(`${URI}/list-video-training-sequence-video-by-sesion-id/${sesion_id}`);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                console.error('An error occurred while fetching the recipes:', response.status);
                this.store.setLoading(false)
                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the recipes:', error);
            this.store.setLoading(false)
            return null;
        }
    },

    async getVideoSequencesBySesionIdAndStudentId(student_id) {
        try {
            this.store.setLoading(true,'Buscando cursos')
            const response = await axios.get(`${URI}/list-video-training-sequence-video-by-student-id/${student_id}`);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                console.error('An error occurred while fetching the recipes:', response.status);
                this.store.setLoading(false)
                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the recipes:', error);
            this.store.setLoading(false)
            return null;
        }
    },







    async createSesion(data) {
        this.store.setLoading(true,'Creando una nueva escuela')
        try {
            const response = await axios.post(`${URI}/insert-video-training-sesion`,data
            );
            
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                this.store.setLoading(false)
                console.error('An error occurred while fetching the recipes:', response.status);
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },



    async createSequence(data) {
        this.store.setLoading(true,'Creando un nuevo curso')
        try {
            const response = await axios.post(`${URI}/insert-video-training-sequence`,data
            );
            
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                this.store.setLoading(false)
                console.error('An error occurred while fetching the recipes:', response.status);
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },




    async createVideo(data) {
        this.store.setLoading(true,'Creando un nuevo curso')
        try {
            const response = await axios.post(`${URI}/insert-video-training`,data
            );
            
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                this.store.setLoading(false)
                console.error('An error occurred while fetching the recipes:', response.status);
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },


    async updateVideo(video_id, data) {
        this.store.setLoading(true,'actualizando video')
        try {
            const response = await axios.put(`${URI}/update-video-training/${video_id}`,data);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                this.store.setLoading(false)
                console.error('An error occurred while fetching the recipes:', response.status);
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },



    
    async updateSesion(sesion_id, data) {
        this.store.setLoading(true,'Actualizando escuela')
        try {
            const response = await axios.put(`${URI}/update-video-training-sesion/${sesion_id}`,data);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                this.store.setLoading(false)
                console.error('An error occurred while fetching the recipes:', response.status);
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },


        
    async updateSequence(sequence_id, data) {
        try {
            this.store.setLoading(true,'Actualizando curso')
            const response = await axios.put(`${URI}/update-video-training-sequence-video/${sequence_id}`,data);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                this.store.setLoading(false)
                console.error('An error occurred while fetching the recipes:', response.status);
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },


    
    async deleteSesion(sesion_id) {
        this.store.setLoading(true,'Borrando Escuela')
        try {
            const response = await axios.delete(`${URI}/delete-video-training-sesion/${sesion_id}`,);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                console.error('An error occurred while fetching the recipes:', response.status);
                this.store.setLoading(false)
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },


        
    async deleteSequence(sequence_id) {
        this.store.setLoading(true,'Borrando Curso')

        try {


            const response = await axios.delete(`${URI}/delete-video-training-sequence/${sequence_id}`,);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                this.store.setLoading(false)
                console.error('An error occurred while fetching the recipes:', response.status);
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },

    async deleteVideo(video_id) {
        this.store.setLoading(true,'Borrando clase')
        try {
            const response = await axios.delete(`${URI}/delete-video-training/${video_id}`,);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                this.store.setLoading(false)
                console.error('An error occurred while fetching the recipes:', response.status);
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },



    async getVideos() {
        this.store.setLoading(true,'ccargando clases')
        try {
            const response = await axios.get(`${URI}/list-video`);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                this.store.setLoading(false)
                console.error('An error occurred while fetching the recipes:', response.status);
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },


    
    async getVideosBySequenceId(sequence_id) {
        try {
            this.store.setLoading(true,'cargando clases')

            const response = await axios.get(`${URI}/list-video-by-sequence-id/${sequence_id}`);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                console.error('An error occurred while fetching the recipes:', response.status);
                this.store.setLoading(false)
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },


        
    async getVideosBySequenceIdAndStudentId(sequence_id,student_id) {
        try {
            this.store.setLoading(true,'cargando clases')

            const response = await axios.get(`${URI}/list-video-by-sequence-id-and-student-id/${sequence_id}/${student_id}`);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                console.error('An error occurred while fetching the recipes:', response.status);
                this.store.setLoading(false)
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },


    async getSesions() {
        try {
            this.store.setLoading(true,'cargando Escuelas')
            const response = await axios.get(`${URI}/list-video-training-sesion`);
            if (response.status === 200) {
                this.store.setLoading(false)
                return response.data;
            } else {
                this.store.setLoading(false)
                console.error('An error occurred while fetching the recipes:', response.status);
                return null;
            }
        } catch (error) {
            this.store.setLoading(false)
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },







};
