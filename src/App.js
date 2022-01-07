import "./App.css";
import { Route } from "react-router-dom";
import { useState } from "react";
import DisplayItems from "./components/Items/DisplayItems";
import NewItemForm from "./components/Items/NewItemForm";
import EditItemForm from "./components/Items/EditItemForm";
import Navbar from "./components/Navbar/Navbar";
import Notes from "./components/Note/Notes";

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
      <Route path="/notes">
        <Notes></Notes>
      </Route>
    </div>
  );
}

export default App;
