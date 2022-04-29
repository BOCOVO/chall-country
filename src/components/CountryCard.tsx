import React from "react";
import { Link } from "react-router-dom";
import KeyDataView from "./KeyDataView";

interface ContryCardProps {
  name: string
  population: string
  region: string
  capital: string
  flag: string ,
  code: string,
}

const CountryCard = ({
  name,
  population,
  region,
  capital,
  flag,
  code
}: ContryCardProps) => {
  return (
    <Link to={`/countries/${code}`}>
      <div className="h-full cursor-pointer overflow-hidden rounded-md shadow-lg bg-white pb-3 dark:bg-dark-blue">
        <img src={flag} alt={`${name} flag`} />
        <div className=" mx-5">
          <h4 className="mt-4 mb-3 text-lg font-bold">{name}</h4>
          <KeyDataView data={Number(population).toLocaleString('en-US')} indexKey="Population" />
          <KeyDataView data={region} indexKey="Region" />
          <KeyDataView data={capital} indexKey="Capital" />
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
