import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./DisplayItems.css";

function DisplayItems(props) {
  const [loaded, setLoaded] = useState(false);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then((response) => setItemsToDisplay(response.data))
      .catch((err) => console.log(err));
    setLoaded(true);
  }, []);

  function deleteItem(deleteId) {
    console.log("in deleteItem");
    axios.delete("http://localhost:5000/items", {
      data: { itemToDelete: deleteId },
    });
  }
  return (
    <div>
      <Card>
        <div className="tablehead">
          <div className="indEle">Item</div>
          <div className="indEle">Quantity</div>
          <div className="indEle">Action</div>
        </div>
      </Card>
      {!loaded && <h1>LOADING</h1>}
      {loaded &&
        itemsToDisplay.map((item) => {
          return (
            <Card key={item._id}>
              <div className="itemelements">
                <div className="indEle">{item.itemName}</div>
                <div className="indEle">{item.itemQuantity}</div>
                <div className="indEle">
                  <Link to={`/edititem/${item._id}`}>
                    <button className="editbutton">Edit</button>
                  </Link>
                  <button
                    className="editbutton"
                    type="submit"
                    onClick={() => deleteItem(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
    </div>
  );
}

export default DisplayItems;
