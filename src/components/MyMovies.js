

import React, { useContext, useState } from "react";
import MoviesContext from "../context/MoviesContext";

const MyMovies = ()=>{
    let [s,sets] = useState("");
    let {data1,setSearch} = useContext(MoviesContext);
        console.log("data : ",data1);
        function handleClick(e){
            e.preventDefault();
            setSearch(s);
        }
    return (
        <>
            <h1>Search Movie</h1>
            <form action="">
                
            <input type="text" onChange={(e)=>sets(e.target.value)}/>
            <button onClick={handleClick}>Search</button>
            </form>

            {/* <ul> */}
                {
                    !data1 && <div className="error">Invalid movie name. Please try again.</div>
                }
                {
                    data1 && data1.map((e)=>(
                        <li key={e.imdbID}><h1>{e.Title} ({e.Year})</h1>
                            <img src={e.Poster} alt="" />
                        </li>

                    ))

                    
                }
            {/* </ul> */}
        </>
    )
}

export default MyMovies;