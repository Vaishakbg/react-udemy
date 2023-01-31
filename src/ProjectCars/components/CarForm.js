import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const {name, cost} = useSelector((state)=>{
    return {
      name: state.form.name,
      cost: state.form.cost,
    }
  })

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleCostChange = (e) => {
    dispatch(changeCost(e.target.value));
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addCar({
      name, cost
    }))
    dispatch(changeCost(0));
    dispatch(changeName(''));
  }
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              className="input is-expanded border"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              type="number"
              className="input is-expanded border"
              value={cost}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
