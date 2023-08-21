import create from './http-service';

export interface Game {
    id: number;
    name: string;
    slug: string;
    description: string;
    rating: number;
    background_image: string;
}

export interface FetechGamesResponse {
    count: number;
    results: Game[];
}

export default create('/games');