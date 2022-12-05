import React from "react";
import { useState, useEffect } from "react";
import "../css/SearchPage.css";
import axios from "axios";

const URL = "http://localhost:5000/";
function SearchPage() {
  const [text, getText] = useState("");
  const [data, getData] = useState([]);
  useEffect(() => {
    console.log(text);
  }, [text]);

  const searchData = async () => {
    try {
      const res = await axios.get(URL + "search", { params: { string: text } });
      getData(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h3>SearchSomething </h3>
      <input
        type={"text"}
        value={text}
        onChange={(event) => getText(event.target.value)}
      />
      <button onClick={searchData}>search</button>
      {data.map((card, index) => {
        return (
          <div id={index}>
            <p2>{card.title}</p2>
            <p2>{card.description}</p2>
            <p2>{card.lang}</p2>

          </div>
        );
      })}
    </div>
  );
}

export default SearchPage;
