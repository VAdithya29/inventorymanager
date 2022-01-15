import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";

function EditItemForm(props) {
  const params = useParams();
  const [itemToDisplay, setItemToDisplay] = useState({});
  const [itemname, setItemname] = useState("");
  const [itemquantity, setItemquantity] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/items/edititem", {
        params: { itemid: params.itemid },
      })
      .then((response) => {
        setItemToDisplay(response.data);
      })
      .catch((err) => console.log("Error:" + err));
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemToDisplay, params.itemid]);
  console.log(itemname, itemquantity);
  function namechangeHandler(event) {
    setItemname(event.target.value);
  }
  function quantitychangeHandler(event) {
    setItemquantity(event.target.value);
  }
  function updateItem(event) {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/items/edititem/${params.itemid}`, {
        itemName: itemname,
        itemQuantity: itemquantity,
      })
      .then(() => console.log("Updated"))
      .catch((err) => console.log(err));
    setItemname("");
    setItemquantity("");
  }

  return (
    <Card>
      {loading && <Card>LOADING</Card>}
      {!loading && (
        <form onSubmit={updateItem}>
          <div className="itemdetails">
            <label>Item Name</label>
            <input
              type="text"
              onChange={namechangeHandler}
              defaultValue={itemname}
              value={itemToDisplay.itemName}
            ></input>
          </div>
          <div className="itemdetails">
            <label>Enter Quantity</label>
            <input
              type="number"
              onChange={quantitychangeHandler}
              defaultValue={itemquantity}
              value={itemToDisplay.itemQuantity}
            ></input>
          </div>
          <button type="submit">Make Changes</button>
        </form>
      )}
    </Card>
  );
}

export default EditItemForm;
