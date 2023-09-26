import { MealInterface } from "../interfaces";
import './Meal.css'

export const Meal: React.FC<MealInterface> = (props) => {
    const {strMeal, strMealThumb, idMeal, setIsModalOpen, setMealId} = props;

    return (
        <div className="Container" onClick={() => {
            setIsModalOpen(true);
            setMealId(idMeal);
        }}>
            <ul>
                <li>
                    <img 
                        src={strMealThumb} 
                        alt={`Image with id: ${idMeal}`}
                    />
                </li>
                <li>{strMeal}</li>
            </ul>
        </div>
    )
}