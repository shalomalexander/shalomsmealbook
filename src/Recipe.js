import React from "react";
import style from './food.module.css';


function Recipe(props) {
  
  
  return (
  
   <div className="card-outer">
    <img src={props.image} className={style.image} alt={props.label}></img>
    <div className="card-body">
      <h2>{props.title}</h2>
      <ul>
      {props.ingredients.map((i, index)=>(
          <li key={index}>{i.text}</li>
      ))}
      </ul>
      <p className="font-weight-bold"> Calories: {props.calory}</p>
    </div>
    <button className={style.myStyle}><a href={props.url} className={style.linkStyle} role="button">View Recipe</a></button>
  </div>
  );
}
export default Recipe;
