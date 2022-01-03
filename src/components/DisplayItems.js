import { Link } from "react-router-dom";
import "./DisplayItems.css";

function DisplayItems(props) {
  // function editItemHandler(event, props) {
  //   event.preventDefault();
  //   console.log("props.item.id");
  //   console.log(props);
  // }
  return (
    <div>
      {props.itemsList.map((item) => {
        return (
          <div className="frag">
            <div className="indEle">{item.itemName}</div>
            <div className="indEle">{item.itemQuantity}</div>
            <div className="indEle">{item.itemId}</div>
            <div>
              <Link to={`/edititem/${item.itemId}`}>Edit</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayItems;
