import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Pizza from "./components/Pizza/Pizza";

function App() {
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
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Pizza></Pizza>
            <Category></Category>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Pizza></Pizza>
            <Category></Category>
          </Route>
          <Route path="/menu">
            <Header></Header>
            {
              
            }
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
