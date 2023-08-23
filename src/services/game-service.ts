import create from './http-service';

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

export interface FetechGamesResponse {
    count: number;
    results: Game[];
}

export default create('/games');