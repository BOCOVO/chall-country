import React, { useContext, useEffect, useState } from "react";
import SearchOutline from "react-ionicons/lib/SearchOutline";
import CountryCard from "../components/CountryCard";
import Select from "../components/Select";
import CountriesContext from "../contexts/CountriesContext";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Home = () => {

  const [activeRegion, setActiveRegion] = useState("");
  const { countries, loadState } = useContext(CountriesContext);
  const [searchText, setSearchText] = useState("");

  const [filteredCountries,setFilteredCountries] = useState<Array<any>>([])

  const filter = () => {
      if(searchText){
          const lowerSText = searchText.toLowerCase()
          return countries.filter( item => (
              item.name.toLowerCase().includes(lowerSText) 
              ||
              item.alpha3Code.toLowerCase().includes(lowerSText) 
              ||
              item.alpha2Code.toLowerCase().includes(lowerSText) 
              ||
              item.nativeName.toLowerCase().includes(lowerSText) 
               )
               )
      }
      if(activeRegion){
          return countries.filter ( item => (
              item.region === activeRegion
          ))
      }
      return countries
  }

  useEffect(() => {
    if(countries.length){
        setFilteredCountries(filter())
    }
  }, [countries,searchText,activeRegion])
  
  return (
    <div className="mx-7 text-sm">
      <div className=" flex flex-col pt-10 pb-4 sm:flex-row justify-between items-start ">
        <form className=" py-3 px-7 flex shadow-lg mb-6 sm:mb-12 rounded-md  bg-white w-full max-w-xs dark:bg-dark-blue">
          <SearchOutline cssClasses=" mr-2" />
          <input
            role="searchbox"
            aria-label="Search for a contry"
            type="search"
            value={searchText}
            placeholder="Search for a contry..."
            onChange={e => setSearchText(e.target.value)}
            className="bg-transparent text-gray-dark dark:text-white focus:outline-none w-full"
          />
        </form>
        <Select
          options={regions}
          active={activeRegion}
          onChange={setActiveRegion}
        />
      </div>
      {loadState === "loaded" ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredCountries.map((item) => {
            return (
              <li className="mb-10 mx-0 md:mx-2" key={item.alpha3Code}>
                <CountryCard
                  name={item.name}
                  capital={item.capital}
                  population={item.population}
                  flag={item.flag}
                  region={item.region}
                  code={item.alpha3Code}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className=" h-96 flex items-center">
          <h3 className="w-full mt-5 text-center text-6xl">Loading...</h3>
        </div>
      )}
    </div>
  );
};

export default Home;
