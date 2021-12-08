import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import {useState} from "react";

type ResultStateType = {
    country : string;
    name : string;
    temperature : string;
    conditionText : string;
    icon : string;
}

function App() {
    const [city, setCity] = useState<string>("");
    const [results, setResults] = useState<ResultStateType>({
        country: "",
        name: "",
        temperature: "",
        conditionText: "",
        icon: ""
    });
    const getWeather = (e: any) =>{
        e.preventDefault();
        fetch(`https://api.weatherapi.com/v1/current.json?key=API_KEY&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(data => setResults({
                country:data.location.country,
                name:data.location.name,
                temperature: data.current.temp_c,
                conditionText:data.current.condition.text,
                icon: data.current.condition.icon
                }
            ))
    };
  return (
    <div className="App">
        <Title/>
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results results={results}/>
    </div>
  );
}

export default App;
