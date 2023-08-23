import create from './http-service';


export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

export interface FetechGenresResponse {
    count: number;
    results: Genre[];
}

export default create('/genres');