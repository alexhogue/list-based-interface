import './App.css';
import { useState, useEffect } from "react";
import travelData from "./assets/travel-data.json";
import TravelItem from "./components/TravelItem";
import VaultItem from "./components/VaultItem";
import ContinentDropdown from "./components/ContinentDropdown";
import ActivityDropdown from "./components/ActivityDropdown";

function App() {
  const [data, setData] = useState(travelData);
  const [vault, setVault] = useState([]);
  const [continents, setContinents] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [isReset, setIsReset] = useState(false);
  

  const loadData = () => {
    setData(travelData);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    // Extract unique continents from travel data
    const uniqueContinents = [
      ...new Set(travelData.map((item) => item.continent))
    ];
    setContinents(uniqueContinents);
  }, []);

  useEffect(() => {
    // Extract unique continents from travel data
    const activity = [
      ...new Set(travelData.map((item) => item.classification)),
    ];
    setActivities(activity);
  }, []);

  const addToVault = (name) => {
    if (!vault.includes(name)) {
      setVault((prev_vault) => [...prev_vault, name]);
    }
  };

  const removeFromVault = (name) => {
    setVault((prev_vault) => prev_vault.filter((item) => item !== name));
  };

  const handleSelectedContinent = (continent) => {
    setSelectedContinent(continent);
  };

  const handleSelectedActivity = (activity) => {
    setSelectedActivity(activity);
  }

  const handleReset = () => {
    setIsReset(true);
  };

  const buildElements = () => {
    let continentData = data;
    if (selectedContinent && !selectedActivity) {
      const continentData = travelData.filter(
        (item) => item.continent === selectedContinent
      );
      const itemList = continentData.map((item, index) => (
        <TravelItem
          key={index}
          item={item}
          index={index}
          addToVault={addToVault}
        />
      ));
      return itemList;
    } 
    let activityData = data;
    if (selectedActivity && !selectedContinent) {
      const activityData = travelData.filter(
        (item) => item.classification === selectedActivity
      );
      const itemList = activityData.map((item, index) => (
        <TravelItem
          key={index}
          item={item}
          index={index}
          addToVault={addToVault}
        />
      ));
      return itemList;
    } 
    let mixedData = continentData;
    if (selectedContinent && selectedActivity) {
      const continentData = travelData.filter(
        (item) => item.continent === selectedContinent
      );
      const mixedData = continentData.filter(
        (item) => item.classification === selectedActivity
      );
      const itemList = mixedData.map((item, index) => (
        <TravelItem
          key={index}
          item={item}
          index={index}
          addToVault={addToVault}
        />
      ));
      return itemList;
    }
    else {
      const itemList = travelData.map((item, index) => (
        <TravelItem
          key={index}
          item={item}
          index={index}
          addToVault={addToVault}
        />
      ));
      return itemList;
    }
    
  };


  const displayVault = () => {
    if (vault.length === 0) {
      return <p id="emptyText">Vault is currently empty</p>;
    } else {
      const itemList = vault.map((name) => (
          <VaultItem
            key={name}
            name={name}
            removeFromVault={removeFromVault}
          />
      ));
      return itemList;
    }
  };


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
        <div className="destinationArea">
          <div id="sortingBar">
            <div id="sort">
              <p className="sortText">Sort by:</p>
              <button className="filterButton">Most Liked</button>
            </div>
            <div id="filter">
              <p className="sortText">Filter by:</p>
              <div id="filterSection">
                <ContinentDropdown
                  key={data.continent}
                  continents={continents}
                  handleSelect={handleSelectedContinent}
                />
                <ActivityDropdown
                  key={data.classification}
                  activities={activities}
                  handleSelect={handleSelectedActivity}
                />
              </div>
            </div>
          </div>
          <div className="destinationList">{buildElements()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
