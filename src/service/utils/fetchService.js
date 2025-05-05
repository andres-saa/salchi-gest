import axios from "axios";
import { useReportesStore } from '@/store/reportes';
import { loginStore } from '@/store/user';  // Importamos el store donde se encuentra el token
import router from "../../router";

// Helper para obtener los headers de autenticación
const getAuthHeaders = () => {
  const login = loginStore();
  return  { Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJteS1hcGkiLCJpYXQiOjE2ODAxMjM0NTYsImV4cCI6MTY4MDEyNzE1NiwiYXR0ciI6InZhbG9yIn0.RHXJVLoqk7Z2NwClBLvZ3X2ryDgPQVtCq2l5hwwuMKG53tiNi2e66CUP1F3WpzNmY389_cWl7vsaEyj22ExAQA` } ;
};

export const fetchService = {
  router: router,

  async get(url, loadingMessage = "cargando", options = {}) {
    const store = useReportesStore();
    try {
      // Muestra el loading solo si loadingMessage es distinto de false
      if (loadingMessage != false) {
        store.setLoading(loadingMessage, 'cargando');
      }

      // Fusionamos cualquier header adicional con el header de autenticación
      const config = {
        headers: {
          ...getAuthHeaders(),
          ...options.headers
        }
      };

      const response = await axios.get(url, config);

      if (response.status === 200) {
        if (loadingMessage !== false) store.setLoading(false);
        return response.data;
      } else {
        if (loadingMessage !== false) store.setLoading(false);
        console.error('An error occurred while fetching data:', response.status);
        return null;
      }
    } catch (error) {
      if (loadingMessage !== false) store.setLoading(false);
      console.error('An error occurred while fetching data:', error);
      return null;
    }
  },

  async post(url, data, loadingMessage = "cargando", redirectPath = null) {
    const store = useReportesStore();
    try {
      if (loadingMessage !== false) {
        store.setLoading(true, loadingMessage);
      }

      const response = await axios.post(url, data, {
        headers:{
          ...getAuthHeaders()
        } 
      });

      if (response.status === 200 || response.status === 201) {
        if (loadingMessage !== false) store.setLoading(false);
        if (redirectPath) {
          this.router.push(redirectPath);
        }
        return response.data;
      } else {
        if (loadingMessage !== false) store.setLoading(false);
        console.error('An error occurred while posting data:', response.status);
        return null;
      }
    } catch (error) {
      if (loadingMessage !== false) store.setLoading(false);
      console.error('An error occurred while posting data:', error);
      return null;
    }
  },

  async put(url, data, loadingMessage = "cargando", redirectPath = null) {
    const store = useReportesStore();
    try {
      if (loadingMessage !== false) {
        store.setLoading(true, loadingMessage);
      }

      const response = await axios.put(url, data, {
        headers: getAuthHeaders()
      });

      if (response.status === 200 || response.status === 204) {
        if (loadingMessage !== false) store.setLoading(false);
        if (redirectPath) {
          this.router.push(redirectPath);
        }
        return response.data;
      } else {
        if (loadingMessage !== false) store.setLoading(false);
        console.error('An error occurred while updating data:', response.status);
        return null;
      }
    } catch (error) {
      if (loadingMessage !== false) store.setLoading(false);
      console.error('An error occurred while updating data:', error);
      return null;
    }
  },

  async delete(url, loadingMessage = "cargando", redirectPath = null) {
    const store = useReportesStore();
    try {
      if (loadingMessage !== false) {
        store.setLoading(true, loadingMessage);
      }

      const response = await axios.delete(url, {
        headers: getAuthHeaders()
      });

      if (response.status === 200 || response.status === 204) {
        if (loadingMessage !== false) store.setLoading(false);
        if (redirectPath) {
          this.router.push(redirectPath);
        }
        return response.data;
      } else {
        if (loadingMessage !== false) store.setLoading(false);
        console.error('An error occurred while deleting data:', response.status);
        return null;
      }
    } catch (error) {
      if (loadingMessage !== false) store.setLoading(false);
      console.error('An error occurred while deleting data:', error);
      return null;
    }
  }
};
