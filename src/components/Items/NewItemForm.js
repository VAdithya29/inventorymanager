import { useState } from "react";
import Card from "../Card/Card";
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
    };
    props.onFormSubmission(addItem);
    console.log("Submitted");
    setItemName("");
    setItemQuantity("");
  }
  return (
    <Card>
      <form className="form" onSubmit={formSubmitHandler}>
        <div className="itemdetails">
          <div>
            <label>Item Name</label>
            <input
              type="text"
              onChange={nameChangeHandler}
              value={itemName}
            ></input>
          </div>
          <div>
            <label>Enter Quantity</label>
            <input
              type="number"
              increment="1"
              onChange={quantityChangeHandler}
              value={itemQuantity}
            ></input>
          </div>
          <button type="submit">Add</button>
        </div>
      </form>
    </Card>
  );
}

export default NewItemForm;
