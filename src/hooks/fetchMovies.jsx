import axios from "axios";
import apiData from "../data/apiData.json";
import { useState, useEffect } from "react";
const apiKey = apiData[0].apiKey;
const baseUrl = apiData[0].baseUrl;

export default function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}/trending/movie/day?api_key=${apiKey}`
        );
        if (response.status === 200) {
          setMovies(response.data.results);
        } else {
          setError("Error fetching movies.");
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  return { movies, isLoading, error };
}
