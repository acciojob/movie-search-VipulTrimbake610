

import React, { useEffect, useState } from "react";
import MoviesContext from "./MoviesContext";
import axios from "axios";

const MoviesProvider = ({children})=>{
    let [data1, setData1] = useState([]);
    let [search, setSearch] = useState("");

    useEffect(()=>{
        axios.get('http://www.omdbapi.com/?apikey=d9b58af5&i=tt1285016&s='+search)
        .then((data)=>{
            console.log(data.data.Search);
            setData1(data.data.Search);
        })
    },[search])

    console.log(search);
    return (
        <MoviesContext.Provider value={{data1,search,setSearch}}>
            {children}
        </MoviesContext.Provider>
    )
}

export default MoviesProvider;