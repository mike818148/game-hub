import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import create from "../services/http-service";

interface FetechResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setGenres] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = create(endpoint).getAll<FetechResponse<T>>();
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

  return { data, error, isLoading };

}

export default useData;