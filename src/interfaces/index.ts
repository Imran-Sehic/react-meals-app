export interface MealInterface {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setMealId: React.Dispatch<React.SetStateAction<string>>;
}

export type MealObject = Pick<MealInterface, 'strMeal' | 'strMealThumb' | 'idMeal'>;

export interface ModalInterface {
    meals: MealObject[];
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    mealId: string;
}

export interface FormInterface {
    setMeals: React.Dispatch<React.SetStateAction<Pick<MealInterface, 'strMeal' | 'strMealThumb' | 'idMeal'>[]>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export enum CategoryOrIngredient {
    CATEGORY = 'category',
    INGREDIENT = 'ingredient'
}