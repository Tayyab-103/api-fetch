import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  // console.log("Clicked");
  // .get() is ki help sy hum api ky end point py http request kary gy
  // .then means response
  // axios by-default JSON main work karta hy humy json format main pass karny ki zaroorat nahi hoti
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response);
        setRecords(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <>
      <Cards records={records} />
    </>
  );
}

export default App;
