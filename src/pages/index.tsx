import React, { useState } from "react";
import { CategoryOrIngredient, MealInterface, MealObject } from "../interfaces";
import { Form } from "../components/Form";
import { Meal } from "../components/Meal";
import { Modal } from "../components/Modal";

export const Main: React.FC = () => {
    const [meals, setMeals] = useState<MealObject[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [mealId, setMealId] = useState<string>("");


    return (
    <div>
        <Form 
            setMeals={setMeals}
            setError={setError}
        />
        {error && <p>{error}</p>}
        {meals && meals.length > 0 && meals.map(meal => 
            <Meal 
                key={meal.idMeal}
                strMeal={meal.strMeal}
                strMealThumb={meal.strMealThumb}
                idMeal={meal.idMeal}
                setIsModalOpen={setIsModalOpen}
                setMealId={setMealId}
            />
        )}
        {isModalOpen && <Modal key={mealId} meals={meals} setIsModalOpen={setIsModalOpen} mealId={mealId}/>}
    </div>
    )
}