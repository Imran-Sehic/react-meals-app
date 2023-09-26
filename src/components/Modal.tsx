import { useEffect, useState } from "react";
import { MealObject, ModalInterface } from "../interfaces";
import './Modal.css'

export const Modal: React.FC<ModalInterface> = (props) => {
    const {mealId, meals, setIsModalOpen} = props;
    const [meal, setMeal] = useState<MealObject>()

    useEffect(() => {
        setMeal(meals.filter(meal => meal.idMeal === mealId)[0]);
    })

    return (
        <div className="Modal">
            <span onClick={() => setIsModalOpen(false)}>X</span>
            <ul>
                <li>
                    <img 
                        src={meal?.strMealThumb} 
                        alt={`Image with id: ${meal?.idMeal}`}
                    />
                </li>
                <li>{meal?.strMeal}</li>
            </ul>
        </div>
    )
}