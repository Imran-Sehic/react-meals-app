import { useState } from "react";
import { CategoryOrIngredient, FormInterface, MealObject } from "../interfaces"
import { getMeals } from "../utils/axios";
import './Form.css'

export const Form: React.FC<FormInterface> = (props) => {
    const {setMeals, setError} = props;

    const [value, setValue] = useState<string>("");
    const [category, setCategory] = useState<CategoryOrIngredient>(CategoryOrIngredient.CATEGORY);

    const getMealsFromDB = () => {
        getMeals(value, category).then(response => {
            setMeals(response.data.meals as MealObject[]);
        }).catch(error => {
            setError("An Error Has Occurred!");
        });
    }

    return (
    <div className="Form">
        <input 
            type="text" 
            value={value} 
            onChange={(event) => setValue(event.target.value)}
            onBlur={getMealsFromDB}/>
        <input 
            type="radio" 
            name="categoryOrIngredient" 
            value="category" onClick={() => setCategory(CategoryOrIngredient.CATEGORY)}
            checked={category === CategoryOrIngredient.CATEGORY}/>
        <label htmlFor="category">Category</label>
        <input 
            type="radio" 
            name="categoryOrIngredient" 
            value="ingredient" onClick={() => setCategory(CategoryOrIngredient.INGREDIENT)}
            checked={category === CategoryOrIngredient.INGREDIENT}/>
        <label htmlFor="ingredient">Ingredient</label>
    </div>
    )
}