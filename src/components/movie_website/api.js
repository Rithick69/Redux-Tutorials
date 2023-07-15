import { useDispatch } from "react-redux";
import {
	setLoading,
    setError,
    setMovies
} from "../../actions";

const API_KEY = process.env.REACT_APP_API_KEY;

export const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

export const GetMovies = async (url) => {
    const dispatch = useDispatch();
    dispatch(setLoading(true));
    try{
        const res = await fetch(url);
        const data = await res.json();
        if(data.Response === 'True') {
            dispatch(setLoading(false));
            dispatch(setMovies(data.Search));
            dispatch(setError({
                show: false,
                msg: ''
            }));
        } else {
            dispatch(setError({
                show: true,
                msg: data.Error
            }));
        }
    } catch (error) {
        console.log(error);
    }
};