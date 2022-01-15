import "./App.css";
import { Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import DisplayItems from "./components/Items/DisplayItems";
import NewItemForm from "./components/Items/NewItemForm";
import EditItemForm from "./components/Items/EditItemForm";
import Navbar from "./components/Navbar/Navbar";
import Notes from "./components/Note/Notes";

function App() {
  const [inventory, setInventory] = useState([]);
  function addToInventory(newItem) {
    console.log(newItem);
    axios
      .post("http://localhost:5000/items/add", newItem)
      .then((res) => console.log(res.data));
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
