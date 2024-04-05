import axios from "axios";
import { URI } from "../conection";

export const recipesService = {
    async getrecipes() {
        try {
            const response = await axios.get(`${URI}/recipes`);
            if (response.status === 200) {
                return response.data;
            } else {
                console.error('An error occurred while fetching the recipes:', response.status);
                return null;
            }
        } catch (error) {
            console.error('An error occurred while fetching the recipes:', error);
            return null;
        }
    },

    async getRecipeDatasheet(sheet_id) {
        try {
            const response = await axios.get(`${URI}/recipe_data_sheet/${sheet_id}/`);
            if (response.status === 200) {
                return response.data;
            } else {
                console.error('An error occurred while fetching the recipes:', response.status);
                return [];
            }
        } catch (error) {
            console.error('An error occurred while fetching the recipes:', error);
            return [];
        }
    },

    async createrecipe(recipeData) {
        try {
            const response = await axios.post(`${URI}/recipe`, recipeData);
            if (response.status === 200) { // Asumiendo que 201 Created es el código de estado para una creación exitosa
                return response.data;
            } else {
                console.error('An error occurred while creating the recipe:', response.status);
                return null;
            }
        } catch (error) {
            console.error('An error occurred while creating the recipe:', error);
            return null;
        }
    },

    async deleterecipe(recipeId) {
        try {
            const response = await axios.delete(`${URI}/recipe/${recipeId}`);
            if (response.status === 200) { // Asumiendo que 200 OK es el código de estado para una eliminación exitosa
                console.log('recipe deleted successfully');
                return true;
            } else {
                console.error('An error occurred while deleting the recipe:', response.status);
                return false;
            }
        } catch (error) {
            console.error('An error occurred while deleting the recipe:', error);
            return false;
        }
    }
};
