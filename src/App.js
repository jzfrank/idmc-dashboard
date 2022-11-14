import logo from "./logo.svg";
import "./App.css";
import DataTable from "./components/DataTable";
import EventQuery from "./components/EventQuery";
import NavBar from "./components/NavBar";
import { useState } from "react";

// dummy test data
const nodes = [
  {
    day: "2022-10-25",
    eventType: "human_disaster",
    eventName: "flood",
    description: "brief snippet from article",
    numberPeopleDisplaced: 10000,
    numberOfDeath: 50,
    state: "somewhere",
    city: "somewhere",
    url: "www.example.com",
    id: 1,
  },
  {
    day: "2022-10-25",
    eventType: "natural_disaster",
    eventName: "flood",
    description: "brief snippet from article",
    numberPeopleDisplaced: 10000,
    numberOfDeath: 50,
    state: "somewhere",
    city: "somewhere",
    url: "www.example.com",
    id: 1,
  },
  {
    day: "2022-10-28",
    eventType: "natural_disaster",
    eventName: "flood",
    description: "brief snippet from article",
    numberPeopleDisplaced: 10000,
    numberOfDeath: 50,
    state: "somewhere",
    city: "somewhere",
    url: "www.example.com",
    id: 2,
  },
  {
    day: "2022-10-28",
    eventType: "natural_disaster",
    eventName: "earthquake",
    description: "brief snippet from article",
    numberPeopleDisplaced: 10000,
    numberOfDeath: 50,
    state: "somewhere",
    city: "somewhere",
    url: "www.example.com",
    id: 3,
  },
];

const COLUMNS = [
  {
    label: "Day",
    renderCell: (item) => item.day,
  },
  {
    label: "Event Type",
    renderCell: (item) => item.eventType,
  },
  { label: "Event Name", renderCell: (item) => item.eventName },
  {
    label: "Description",
    renderCell: (item) => item.description,
  },
  {
    label: "People Displaced",
    renderCell: (item) => item.numberPeopleDisplaced,
  },
  {
    label: "Number of Death",
    renderCell: (item) => item.numberOfDeath,
  },
  {
    label: "State",
    renderCell: (item) => item.state,
  },
  {
    label: "City",
    renderCell: (item) => item.city,
  },
  {
    label: "url",
    renderCell: (item) => item.url,
  },
];

function App() {
  const [data, setData] = useState({ nodes });
  const [lastDays, setLastDays] = useState(7);
  const getLastDaysData = (lastDays) => {
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
      <div className="container m-auto content-start ">
        <EventQuery
          lastDays={lastDays}
          getLastDaysData={getLastDaysData}
          setDays={setLastDays}
        />
        <DataTable data={data} columns={COLUMNS} />
      </div>
      <footer className="text-center h-10">
        <p className="font-light text-gray-400">Made by: H4G Team for IDMC</p>
      </footer>
    </div>
  );
}

export default App;
