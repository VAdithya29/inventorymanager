import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./DisplayItems.css";

function DisplayItems(props) {
  // function editItemHandler(event, props) {
  //   event.preventDefault();
  //   console.log("props.item.id");
  //   console.log(props);
  // }
  return (
    <div>
      <Card>
        <div className="tablehead">
          <div className="indEle">Item</div>
          <div className="indEle">Quantity</div>
          <div className="indEle">Action</div>
        </div>
      </Card>
      {props.itemsList.map((item) => {
        return (
          <Card>
            <div className="itemelements">
              <div className="indEle">{item.itemName}</div>
              <div className="indEle">{item.itemQuantity}</div>
              <div className="indEle">
                <Link to={`/edititem/${item.itemId}`}>
                  <button className="editbutton">Edit</button>
                </Link>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default DisplayItems;
