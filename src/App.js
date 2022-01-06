import "./App.css";
import { Route } from "react-router-dom";
import { useState } from "react";
import DisplayItems from "./components/DisplayItems";
import NewItemForm from "./components/NewItemForm";
import EditItemForm from "./components/EditItemForm";
import Navbar from "./components/Navbar";

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
  return (
    <div className="App">
      <Navbar></Navbar>
      <Route path="/app">
        <NewItemForm
          currentItemsList={inventory}
          onFormSubmission={addToInventory}
        ></NewItemForm>
      </Route>
      <Route path="/disp">
        <DisplayItems itemsList={inventory}></DisplayItems>
      </Route>
      <Route path="/edititem/:itemid">
        <EditItemForm currentItemsList={inventory}></EditItemForm>
      </Route>
    </div>
  );
}

export default App;
