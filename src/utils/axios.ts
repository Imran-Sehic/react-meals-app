import axios, { AxiosResponse } from "axios"
import { getMealsByCategory, getMealsByIngredient } from "./urls"
import { CategoryOrIngredient, MealInterface } from "../interfaces"

export const getMeals = (queryParam: string, category: CategoryOrIngredient): Promise<AxiosResponse<any, any>> => {
    return axios.get(category == CategoryOrIngredient.CATEGORY ? getMealsByCategory.concat(queryParam) : getMealsByIngredient.concat(queryParam));
}