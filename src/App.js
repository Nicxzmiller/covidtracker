import React, {useEffect, useState} from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import './App.css';
import InfoBox from "./InfoBox";

function App() {

    const [countries, setCountries] = useState([]);
    const [country, setCountry ] = useState('worldwide');

    //https://disease.sh/v3/covid-19/all

    useEffect(() =>{
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) =>{
                    const countries = data.map((country) => ({
                        name:country.country,
                        value:country.countryInfo.iso2,
                    }));
                    setCountries(countries);
                });
        };
        getCountriesData();
    }, []);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;

        console.log(countryCode);

        setCountry(countryCode);
    };

  return (
    <div className="app">
        <div className="app__header">
            <h1 className="title">Covid 19 tracker</h1>
            <FormControl className="app__dropdown">
                <Select variant="outlined" onChange={onCountryChange} value={country}>
                    <MenuItem value="worldwide">WorldWide</MenuItem>
                    {
                        countries.map(country => (
                            <MenuItem value={country.value}>{country.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
        <div className="app__stats">
            <InfoBox title="Corona Virus Cases" cases={240} total={2000}/>
            <InfoBox title="Recovered" cases={240} total={1000}/>
            <InfoBox title="Deaths" cases={240} total={500}/>
        </div>
        {/*table*/}
        {/*Graph*/}
        {/*map*/}
    </div>
  );
}

export default App;
