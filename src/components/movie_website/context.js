import React, { useContext, useEffect, useState } from "react";

// context (warehouse)
// Provider (delivery agent)
// Consumer / useContext hook (you the consumer)

const API_KEY = process.env.REACT_APP_API_KEY;

export const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`
// Creating a context

const AppContext = React.createContext();

// we need to create a provider.

const AppProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const [isError, setError] = useState({show: 'false', msg: ''});
    const [query, setQuery] = useState('');

    const getMovies = async (url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            if(data.Response === 'True') {
                setLoading(false);
                setMovie(data.Search);
                setError({
                    show: false,
                    msg: ''
                })
            } else {
                setError({
                    show: true,
                    msg: data.Error
                })
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (query) {
            setLoading(true);
            const timeOut = setTimeout(() => {
                getMovies(`${API_URL}&s=${query}`);
            }, 800);

            // UseEffect only returns one clean up method which will clear
            // anything written in the search field before debounce time has passed.

            return () => clearTimeout(timeOut);
        } else {
            setLoading(false)
            setError({
                show: false,
                msg: ''
            })
            setMovie([])
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
