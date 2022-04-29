import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContryDetails from "./pages/CountryDetails";
import CountriesContext, { CountriesContextType } from "./contexts/CountriesContext";
import { getAllCountries } from "./api/request";
import Footer from "./components/Footer";

function App() {

  const [countriesList, setContriesList] = useState([]);
  const [loadState, setLoadState] = useState("waiting");

  const loadContries = () => {
    setLoadState("loading");
    getAllCountries(
      (response) => {
        setLoadState("loaded");
        setContriesList(response)
      },
      () => {
        setLoadState("error");
      }
    );
  };

  const contextValue: CountriesContextType  = {
    countries:countriesList,
    loadState
  }

  console.log(contextValue)

  useEffect(loadContries, []);

  return (
    <BrowserRouter>
      <CountriesContext.Provider value={contextValue}>
        <div className=" min-h-screen flex flex-col justify-between text-very-dark-blue-light bg-very-light-gray dark:text-white dark:bg-very-dark-blue-dark stroke-very-dark-blue-light dark:stroke-white">
          <Header />
          <main className="mt-5 max-w-6xl w-full m-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/countries/:country" element={<ContryDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CountriesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
