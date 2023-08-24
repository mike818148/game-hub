import useData from "./useData";
import { Platform } from "./useGames";

export interface ParentPlatform {
    id: number;
    name: string;
    slug: string;
    platforms: Platform[];
}

const usePlatform = () => useData<ParentPlatform>("/platforms/lists/parents");

export default usePlatform;