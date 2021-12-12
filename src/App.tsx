import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Loading from "./components/Loading";
import React, {useState} from "react";

type ResultStateType = {
    country : string;
    name : string;
    temperature : string;
    conditionText : string;
    icon : string;
}

const apikey = process.env.REACT_APP_API_KEY

function App() {
    const [city, setCity] = useState<string>("");
    const [results, setResults] = useState<ResultStateType>({
        country: "",
        name: "",
        temperature: "",
        conditionText: "",
        icon: ""
    });
    const [loading, setLoading] = useState<boolean>(false)
    const getWeather = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setLoading(true);
        fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(data => {
                    setResults({
                        country:data.location.country,
                        name:data.location.name,
                        temperature: data.current.temp_c,
                        conditionText:data.current.condition.text,
                        icon: data.current.condition.icon
                    })
                    setCity("");
                    setLoading(false);
            })
            .catch(err =>
            alert(`${err}\n
            please reload your browser.`))
    };
  return (
    <div className="wrapper">
        <div className="container">
            <Title/>
            <Form setCity={setCity} getWeather={getWeather} city={city}/>
            {loading ? <Loading/>:<Results results={results}/>}
        </div>
    </div>
  );
}

export default App;
