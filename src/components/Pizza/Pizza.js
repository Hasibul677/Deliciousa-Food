import React from "react";
import "./pizza.css";

const Pizza = () => {
  return (
    <div className="lg:grid grid-cols-2 gap-4">
      <div>
        <img src="./images/pizza/pizza.png" alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-10 mt-10">
          Satitisty Your Pizza Pasta
        </h1>
        <h1 className="pizza-info text-yellow-600 hidden lg:block">Cravings</h1>
        <p className="font-thine mt-10 text-justify lg:mr-10">
          A barbecue grill is a device that cooks food by applying heat from
          below. There are several varieties of grills, with most falling into
          one of two categories gas-fueled or charcoal. There is debate over
          which method yields superior results A barbecue grill is a device that
          cooks food by applying heat from below. There are several varieties of
          grills.
        </p>
        <div className="flex mt-10">
          <button className="inline-flex text-white bg-indigo-700 border-0 py-2 px-10 focus:outline-none hover:bg-yellow-700 rounded-full text-lg">
            OUR STORY
          </button>
          <button className="ml-4 inline-flex text-white bg-yellow-700 border-0 py-2 px-10 focus:outline-none  hover:bg-indigo-700 rounded-full text-lg">
            OUR MENU
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
