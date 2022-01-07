import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

function EditItemForm(props) {
  const params = useParams();
  const selectedItem = props.currentItemsList.find(
    (item) => item.itemId === params.itemid
  );
  console.log(selectedItem);
  const [itemname, setItemname] = useState(selectedItem.itemName);
  const [itemquantity, setItemquantity] = useState(selectedItem.itemQuantity);
  function namechangeHandler(event) {
    setItemname(event.target.value);
  }
  function quantitychangeHandler(event) {
    setItemquantity(event.target.value);
  }
  function updateItem(event) {
    event.preventDefault();
    props.currentItemsList.forEach((item) => {
      if (item.itemId === params.itemid) {
        item.itemName = itemname;
        item.itemQuantity = itemquantity;
      }
    });
  }
  return (
    <Card>
      <form onSubmit={updateItem}>
        <div className="itemdetails">
          <label>Item Name</label>
          <input
            type="text"
            onChange={namechangeHandler}
            defaultValue={selectedItem.itemName}
          ></input>
        </div>
        <div>
          <label>Enter Quantity</label>
          <input
            type="number"
            onChange={quantitychangeHandler}
            defaultValue={selectedItem.itemQuantity}
          ></input>
        </div>
        <button type="submit">Make Changes</button>
      </form>
    </Card>
  );
}

export default EditItemForm;
