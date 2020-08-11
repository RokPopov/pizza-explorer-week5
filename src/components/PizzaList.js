import React from "react";
import { useSelector } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const pizzaList = (reduxState) => {
  return reduxState.pizzas;
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const listOfPizzas = useSelector(pizzaList);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}!</strong>
      </p>

      <strong>The list of pizzas:</strong>
      {listOfPizzas
        .sort((pizza1, pizza2) => {
          return pizza2.bought - pizza1.bought;
        })
        .map((pizza, i) => {
          return (
            <ul key={i}>
              <li>
                <strong>{pizza.name}</strong>
              </li>
              <br />
              {pizza.description}
              <br />
              <strong>Bought:</strong> {pizza.bought}
              <br />
              <br />
            </ul>
          );
        })}
    </div>
  );
}
