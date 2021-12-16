import "./App.css";
import { useState } from "react";
import DisplayItems from "./components/DisplayItems";
import NewItemForm from "./components/NewItemForm";

function App() {
  const [inventory, setInventory] = useState([]);
  // const inventory = [
  //   {
  //     itemName: "Rice",
  //     itemQuantity: "1",
  //   },
  //   {
  //     itemName: "Wheat",
  //     itemQuantity: "2",
  //   },
  // ];
  function addToInventory(newItem) {
    console.log(newItem);
    setInventory((prevItems) => {
      return [...prevItems, newItem];
    });
    console.log(inventory);
  }
  function increaseQuantity(id) {
    inventory.forEach((element) => {
      console.log(element.id);
      if (element.id === id) {
        var quantity = parseInt(element.itemQuantity);
        quantity += 1;
        element.itemQuantity = String(quantity);
      }
    });
  }
  return (
    <div className="App">
      <h1>INVENTORY MANAGER</h1>
      <NewItemForm
        currentItemsList={inventory}
        onFormSubmission={addToInventory}
      ></NewItemForm>
      {/* {inventory.map((item) => (
        <DisplayItems />
      ))} */}
      <DisplayItems
        itemsList={inventory}
        increaseQuantity={increaseQuantity}
      ></DisplayItems>
    </div>
  );
}

export default App;
