import useData from "./useData";
import { Genre } from "./useGenres";
import { ParentPlatform } from "./usePlatforms";

export interface Platform {
    id: number;
    name: string; 
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    slug: string;
    description: string;
    rating: number;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: ParentPlatform | null) => 
        useData<Game>('/games', {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;