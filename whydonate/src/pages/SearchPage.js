import React from 'react'
import { useState,useEffect } from 'react';
import '../css/SearchPage.css'
import axios from 'axios';

function SearchPage() {
    const [text,getText]=useState("")
    useEffect(() => {
       console.log(text);
    }, [text]);

    const searchData=()=>{
        axios.get(URL,{text:text})
    }
  return (
    <div>
    <h3>SearchSomething </h3>
    <input type={"text"} value={text} onChange={(event)=>getText(event.target.value)} />
    <button onClick={{searchData}} >search</button>
    </div>
  )
}

export default SearchPage