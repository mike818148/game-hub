import { useEffect, useState } from "react";
import gameService, { FetechGamesResponse, Game } from "../services/game-service";
import { CanceledError } from "axios";


const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = gameService.getAll<FetechGamesResponse>();
    setLoading(true);
    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
      return cancel;
  }, []);

  return { games, error, isLoading };
}

export default useGames;