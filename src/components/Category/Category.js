import React, { useEffect, useState } from "react";
import Meals from "../Meals/Meals";
import './Category.css'

const Category = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategorys(data.categories));
  }, []);
  const foodCetagory=cstrCategory=>{
    console.log(cstrCategory);
  }
  return (
    <div className='bg' style={{backgroundImage:'url(./images/category/bg.jpg)'}}>
        <div className="lg:grid grid-cols-3 gap-2">
      {categorys.map((category) => (
        <Display key={categorys.idCategory} category={category} foodCate={foodCetagory}></Display>
      ))}
    </div>
    </div>
  );
};

function Display(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } =
    props.category;
  return (
    <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg mt-10">
      <img className="w-full" src={strCategoryThumb} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{strCategory}</div>
        <p className="text-gray-700 text-base">
          {strCategoryDescription.slice(0, 200)}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button onClick={()=>props.foodCate(strCategory)} className="inline-block bg-green-200 hover:bg-red-500 rounded-full px-6 py-2 text-sm font-semibold text-gray-700 hover:text-white mr-2 mb-2">
          SEE MORE
        </button>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}

export default Category;
