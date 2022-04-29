import {createContext} from "react";

export interface Country{
    name: string
    population: string
    region: string
    capital: string
    flag: string ,
    alpha3Code: string,
    alpha2Code: string,
    nativeName: string,
    subregion: string,
    topLevelDomain: Array<any>,
    borders: Array<string>,
    currencies: Array<any>,
    languages: Array<{
        [key: string] : string
    }>,
    [key: string] : string | Array<any>
}
export interface CountriesContextType {
    countries: Array<Country>,
    loadState: string
}

const CountriesContext = createContext<CountriesContextType>({countries:[],loadState:"waiting"})

export default CountriesContext