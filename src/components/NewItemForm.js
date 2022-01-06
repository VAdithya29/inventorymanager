import { useState } from "react";
import Card from "./Card";
import "./NewItemForm.css";
function NewItemForm(props) {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  function nameChangeHandler(event) {
    setItemName(event.target.value);
  }
  function quantityChangeHandler(event) {
    setItemQuantity(event.target.value);
    console.log(itemQuantity);
  }
  function formSubmitHandler(event) {
    event.preventDefault();
    const addItem = {
      itemName,
      itemQuantity,
      itemId: Math.random().toString(),
    };
    props.onFormSubmission(addItem);
    console.log("Submitted");
  }
  return (
    <Card>
      <form className="form" onSubmit={formSubmitHandler}>
        <div className="itemdetails">
          <div>
            <label>Item Name</label>
            <input type="text" onChange={nameChangeHandler}></input>
          </div>
          <div>
            <label>Enter Quantity</label>
            <input
              type="number"
              increment="1"
              onChange={quantityChangeHandler}
            ></input>
          </div>
          <button type="submit">Add</button>
        </div>
      </form>
    </Card>
  );
}

export default NewItemForm;
