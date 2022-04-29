import React, { useContext, useEffect, useState } from "react";
import ArrowBack from "react-ionicons/lib/ArrowBack";
import { Link, useParams } from "react-router-dom";
import KeyDataView from "../components/KeyDataView";
import CountriesContext, { Country } from "../contexts/CountriesContext";

interface Borders {
  name: string;
  alpha3Code: string;
}

const ContryDetails = () => {
    
  let { country } = useParams();

  const [countryData, setCountryData] = useState<Country | null>(null);
  const { countries } = useContext(CountriesContext);
  const [borderCountries, setBorderCountries] = useState<Array<Borders> | null>(
    null
  );

  useEffect(() => {
    // retrieving country from its code
    const countryObect = countries.find((v) => v.alpha3Code === country);
    if (countryObect) {
    // retrieving contry border countries

      setCountryData(countryObect);
      const borderCountries = countries
        .filter((v) => countryObect.borders?.includes(v.alpha3Code))
        .map((v) => ({ name: v.name, alpha3Code: v.alpha3Code }));
      setBorderCountries(borderCountries);
    }
  }, [countries, country]);

  return (
    <div className=" mt-10 text-base mx-4 pb-20">
      <Link
        className="inline-flex bg-white stroke-very-dark-blue-light dark:stroke-white dark:bg-dark-blue shadow-md rounded-md px-5 py-2"
        aria-label="Go back"
        to="/"
      >
        <ArrowBack cssClasses="mx-1" />
        Back
      </Link>
      {countryData ? (
        <div className=" mt-10 flex flex-wrap items-center">
          <img
            className=" w-full md:max-w-md md:w-1/2"
            src={countryData.flag}
            alt={`${countryData.name} flag`}
          />
          <div className=" w-full mt-5 md:mt-0 md:w-1/2 md:mx-10">
            <h2 className=" font-bold text-3xl mt-2 mb-6 md:mb-4">
              {countryData.name}
            </h2>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
              <div>
                <KeyDataView data={countryData.name} indexKey="Native Name" />
                <KeyDataView
                  data={Number(countryData.population).toLocaleString("en-US")}
                  indexKey="Population"
                />
                <KeyDataView data={countryData.region} indexKey="Region" />
                <KeyDataView
                  data={countryData.subregion}
                  indexKey="Sub Region"
                />
                <KeyDataView data={countryData.capital} indexKey="Capital" />
              </div>
              <div className=" mt-10 md:mt-0">
                <KeyDataView
                  data={countryData.topLevelDomain[0]}
                  indexKey="Top Level Domain"
                />
                <KeyDataView
                  data={countryData.currencies[0]["code"]}
                  indexKey="Currencies"
                />
                <KeyDataView
                  data={countryData.languages.map((v) => v.name).toString()}
                  indexKey="Languages"
                />
              </div>
            </div>
            <KeyDataView
              data={
                <ul className=" flex flex-wrap items-center">
                  {borderCountries?.length ? (
                    borderCountries.map((v) => (
                      <li className=" inline mx-1 mb-1 rounded bg-white dark:bg-dark-blue px-3 py-1 shadow">
                        <Link
                          aria-label={`Goto ${v.name} country`}
                          to={`/countries/${v.alpha3Code}`}
                        >
                          {v.name}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>No border contries</li>
                  )}
                </ul>
              }
              indexKey="Border Countries"
            />
          </div>
        </div>
      ) : (
        <div className=" h-28 items-center ">
          <h6 className=" w-full text-4xl text-center">Please wait ...</h6>
        </div>
      )}
    </div>
  );
};

export default ContryDetails;
