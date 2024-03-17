import './App.css';
import { useState, useEffect } from "react";
import travelData from "./assets/travel-data.json";
import TravelItem from "./components/TravelItem";
import VaultItem from "./components/VaultItem";

function App() {
  const [data, setData] = useState(travelData);
  const [vault, setVault] = useState([]);

  const loadData = () => {
    setData(travelData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addToVault = (name) => {
    if (!vault.includes(name)) {
      setVault((prev_vault) => [...prev_vault, name]);
    }
  };

  const removeFromVault = (name) => {
    setVault((prev_vault) => prev_vault.filter((item) => item !== name));
  };

  const buildElements = () => {
    const itemList = travelData.map((item, index) => (
      <TravelItem
        key={index}
        item={item}
        index={index}
        addToVault={addToVault}
      />
    ));
    return itemList;
  };

  const displayVault = () => {
    if (vault.length === 0) {
      return <p id="emptyText">Vault is currently empty</p>;
    } else {
      const itemList = vault.map((name) => (
          <VaultItem
            name={name}
            removeFromVault={removeFromVault}
          />
      ));
      return itemList;
    }
  };

  // const filterbyCont = () => {
  //   const itemList = 
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Voyage Vault</h1>
      </header>
      <div className="travelContent">
        <div id="vaultContainer">
          <div className="vault">
            <h2 id="vaultHeader">My Vault</h2>
            {displayVault()}
          </div>
        </div>
        <div className="destinationList">
          {buildElements()}</div>
      </div>
    </div>
  );
}

export default App;
