import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import Pizza from "../Components/Pizza.js";
import Filter from "../Components/Filter.js"

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector(state=>state.getAllPizzasReducer)
  const {pizzas, error, loading} = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
       <Filter/>
      <div className="row justify-content-center">
        {loading ? <Loading /> : error ? <Error error='Something went wrong'/> : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
              );
            })
          )}
      </div>
    </div>
  );
}
