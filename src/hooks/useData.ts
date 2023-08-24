import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import create from "../services/http-service";

interface FetechResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setGenres] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = create(endpoint, requestConfig).getAll<FetechResponse<T>>();
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
  }, deps ? [...deps] : []);

  return { data, error, isLoading };

}

export default useData;