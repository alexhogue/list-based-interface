import './App.css';
import { useState, useEffect } from "react";
import travelData from "./assets/travel-data.json";
import TravelItem from "./components/TravelItem";
import VaultItem from "./components/VaultItem";
import Reset from "./components/ResetButton";
import Sort from "./components/SortButton";
import ContinentDropdown from "./components/ContinentDropdown";
import ActivityDropdown from "./components/ActivityDropdown";

function App() {
  const [data, setData] = useState(travelData);
  const [vault, setVault] = useState([]);
  const [count, setCount] = useState(0);
  const [continents, setContinents] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("");
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [isSorted, setIsSorted] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [isReset, setIsReset] = useState(false);
  

  const loadData = () => {
    setData(travelData);
  };

  const removeHandler = () => {
    setIsRemoved(!isRemoved);
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
      setCount(count + 1);
      setIsReset(false);
    }
  };

  const removeFromVault = (name) => {
    setVault((prev_vault) => prev_vault.filter((item) => item !== name));
    setCount(count - 1);
    removeHandler();
  };

  const handleSelectedContinent = (continent) => {
    setIsReset(false)
    setSelectedContinent(continent);
  };

  const handleSelectedActivity = (activity) => {
    setIsReset(false);
    setSelectedActivity(activity);
  }

  const sortHandler = () => {
    setIsSorted(true)
  }

  useEffect(() => {
  }, [isSorted]);

  const buildElements = () => {
    let sortedData = data;
    if (isSorted) {
      const sortedData = travelData.sort((a,b) => b.likes - a.likes);
      setIsSorted(false);
    }
    let continentData = data;
    if (selectedContinent && !selectedActivity) {
      const continentData = travelData.filter(
        (item) => item.continent === selectedContinent
      );
      const itemList = continentData.map((item, index) => (
        <TravelItem
          key={item.id}
          item={item}
          index={index}
          addToVault={addToVault}
          removeFromVault={removeFromVault}
          // isReset={isReset}
          inVault={vault.includes(item.name)}
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
          key={item.id}
          item={item}
          index={index}
          addToVault={addToVault}
          removeFromVault={removeFromVault}
          // isReset={isReset}
          inVault={vault.includes(item.name)}
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
          key={item.id}
          item={item}
          index={index}
          addToVault={addToVault}
          removeFromVault={removeFromVault}
          // isReset={isReset}
          inVault={vault.includes(item.name)}
        />
      ));
      if (itemList.length === 0) {
        return <p>Filters do not match any travel options</p>
      }
      return itemList;
    }
    else {
      const itemList = travelData.map((item, index) => (
        <TravelItem
          key={item.id}
          item={item}
          index={index}
          addToVault={addToVault}
          removeFromVault={removeFromVault}
          // isReset={isReset}
          inVault={vault.includes(item.name)}
        />
      ));
      return itemList;
    }
  };


  const displayVault = () => {
    if (vault.length === 0) {
      return <p id="emptyText">Your vault is currently empty</p>;
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

  const resetPage = () => {
    setSelectedActivity("");
    setSelectedContinent("");
    // setVault([]);
    // setCount(0);
    setData(travelData);
    let unSortedData = data;
    unSortedData = travelData.sort((a, b) => a.id - b.id);
    setIsReset(true);
  };

  console.log(isReset);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Voyage Vault</h1>
      </header>
      <div className="travelContent">
        <div id="vaultContainer">
          <div className="vault">
            <h2 id="vaultHeader">My Vault</h2>
            <p id="countUpdater">
              {count === 1 ? (
                <p>
                  <b>{count}</b> voyage in your vault!
                </p>
              ) : count > 1 ? (
                <p>
                  <b>{count}</b> voyages in your vault!
                </p>
              ) : (
                " "
              )}
            </p>
            {displayVault()}
          </div>
        </div>
        <div className="destinationArea">
          <div id="sortingBar">
            <div id="sort">
              <p className="sortText">Sort by:</p>
              <Sort handleSelect={sortHandler} />
            </div>
            <div id="filter">
              <p className="sortText">Filter by:</p>
              <div id="filterSection">
                <ContinentDropdown
                  key={data.continent}
                  continents={continents}
                  handleSelect={handleSelectedContinent}
                  isReset={isReset}
                />
                <ActivityDropdown
                  key={data.classification}
                  activities={activities}
                  handleSelect={handleSelectedActivity}
                  isReset={isReset}
                />
              </div>
            </div>
            <div id="reset">
              <Reset handleSelect={resetPage} />
            </div>
          </div>
          <div className="destinationList">{buildElements()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
