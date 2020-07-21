import React, {useEffect, useState} from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core";
import './App.css';

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
            <h1>Covid 19 tracker</h1>
            <FormControl className="app__dropdown">
                <Select variant="outlined" onChange={onCountryChange} value={country}>
                    <MenuItem value="worldwide">WorldWide</MenuItem>
                    {
                        countries.map(country => (
                            <MenuItem value={country.value}>{country.name}</MenuItem>
                        ))
                    }
                    {/*loop through countries and show a dropdown list*/}
                    {/*<MenuItem value="worldwide">WorldWide</MenuItem>*/}
                    {/*<MenuItem value="worldwide">Option1</MenuItem>*/}
                    {/*<MenuItem value="worldwide">Option2</MenuItem>*/}
                </Select>
            </FormControl>
        </div>
        
        {/*Header*/}
        {/*title and drop down*/}
        {/*information boxees*/}
        {/*information boxees*/}
        {/*information boxees*/}
        {/*information boxees*/}
        {/*table*/}
        {/*Graph*/}
        {/*map*/}
    </div>
  );
}

export default App;
