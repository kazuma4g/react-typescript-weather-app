type  ResultPropsType = {
  results:{
    country : string;
    name : string;
    temperature : string;
    conditionText : string;
    icon : string;
  }
}

const Results = ({results}: ResultPropsType) => {
  const {name, country, temperature, conditionText, icon} = results;
  return (
      <div>
        {name && <div className="results-city">{name}</div>}
        {country && <div className="results-country">{country}</div>}
        {temperature && <div className="results-temperature">{temperature} <span>°C</span></div>}
        {conditionText && <div className="results-condition">
          <img src={icon} alt={"icon"}/>
          <span>{conditionText}</span>
          </div>}
      </div>
  );
};

export default Results;