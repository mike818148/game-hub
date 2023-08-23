import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import genreService, { FetechGenresResponse, Genre } from "../services/genre-service";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = genreService.getAll<FetechGenresResponse>();
    setLoading(true);
    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
      return cancel;
  }, []);

  return { genres, error, isLoading };

}

export default useGenres;