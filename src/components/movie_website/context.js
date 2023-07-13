import React, { useContext, useEffect, useState } from "react";

// context (warehouse)
// Provider (delivery agent)
// Consumer / useContext hook (you the consumer)

const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`
// Creating a context

const AppContext = React.createContext();

// we need to create a provider.

const AppProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setError] = useState({show: 'false', msg: ''});
    const [query, setQuery] = useState('Titanic');

    const getMovies = async (url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if(data.Response === 'True') {
                setLoading(false);
                setMovie(data.Search);
            } else {
                setError({
                    show: 'true',
                    msg: data.error
                })
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if(query){
            getMovies(`${API_URL}&s=${query}`);
        }
    }, [query]);

    return <AppContext.Provider
    value={{isLoading, isError, movie, query, setQuery}}
    >{children}</AppContext.Provider>;
};

// global custom hook for context

const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppContext, AppProvider, useGlobalContext};
