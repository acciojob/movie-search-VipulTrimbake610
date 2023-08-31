
import React from "react";
import './../styles/App.css';
import MoviesProvider from "../context/MoviesProvider";
import MyMovies from "./MyMovies";

const App = () => {
  return (
    <div>
        <MoviesProvider>
            <MyMovies/>
        </MoviesProvider>
    </div>
  )
}

export default App
