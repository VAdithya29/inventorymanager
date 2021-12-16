import "./DisplayItems.css";

function DisplayItems(props) {
  function increaseQuantity(item) {
    console.log("Trying to increase quantity");
    console.log(item.id);
    props.increaseQuantity(item.id);
  }
  return (
    <div>
      {props.itemsList.map((item) => {
        return (
          <div className="frag">
            <div className="indEle">{item.itemName}</div>
            <button>-</button>
            <div className="indEle">{item.itemQuantity}</div>
            <button type="reset" onSubmit={increaseQuantity}>
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayItems;
