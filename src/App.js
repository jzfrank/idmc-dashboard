import logo from "./logo.svg";
import "./App.css";
import DataTable from "./components/DataTable";
import EventQuery from "./components/EventQuery";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { nodes } from "./dummyData";

function App() {
  const [data, setData] = useState({ nodes });
  const [lastDays, setLastDays] = useState(7);
  const getLastDaysData = (lastDays) => {
    lastDays = lastDays.trim();
    if (lastDays.length === 0) {
      lastDays = 365;
    }
    const today = new Date();
    const todayDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const lastDaysDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - lastDays
    );
    const lastDaysData = nodes.filter((node) => {
      const nodeDay = new Date(node.day.split("-"));
      return nodeDay >= lastDaysDate && nodeDay <= todayDate;
    });
    setData({ nodes: lastDaysData });
  };
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="container m-auto mt-5 content-start ">
        <EventQuery
          lastDays={lastDays}
          getLastDaysData={getLastDaysData}
          setDays={setLastDays}
        />
        <DataTable data={data} />
      </div>
      <footer className="text-center h-10">
        <p className="font-light text-gray-400">Made by: H4G Team for IDMC</p>
      </footer>
    </div>
  );
}

export default App;
