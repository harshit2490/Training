import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "20$",
            id: 21313,
        }, {
            name: "Thor",
            price: "10$",
            id: 21314,
        }, {
            name: "Inception",
            price: "40$",
            id: 21315,
        }, {
            name: "Spider Man",
            price: "30$",
            id: 21316,
        },
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};