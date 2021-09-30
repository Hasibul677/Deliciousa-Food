import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = (props) => {
    const [meals, setMeals]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Vegan')
        .then(res=> res.json())
        .then(data=> setMeals(data.meals))

    },[]);
    return (
        <div>
            {
                meals.map(meal=> <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
            <h1>hello</h1>
        </div>
    );
};

export default Meals;