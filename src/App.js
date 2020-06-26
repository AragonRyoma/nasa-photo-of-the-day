import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/searchbar";
import axios from "axios";
import Data from "./components/apiData";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("2020-05-09");

  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=bHIA6qWUaAKzxFkGG3IEBORNVU09ljoxBFOVuR9r&date=" +
          date
      )
      .then((response) => {
        setTitle(response.data.title);
        setDesc(response.data.explanation);
        setImg(response.data.hdurl);
      })
      .catch((err) => console.log(err));
  }, [date]);

  return (
    <>
      <SearchBar setDateHandler={(newDate) => setDate(newDate)} />

      <Data title={title} desc={desc} date={date} img={img} />
    </>
  );
}

export default App;
