type  ResultPropsType = {
  results:{
    country : string;
    name : string;
    temperature : string;
    conditionText : string;
    icon : string;
  }
}

const Results = (props: ResultPropsType) => {
  return (
      <div>
        {props.results.name && <div className="results-city">{props.results.name}</div>}
        {props.results.country && <div className="results-country">{props.results.country}</div>}
        {props.results.temperature &&
            <div className="results-temperature">
              {props.results.temperature} <span>°C</span>
            </div>}
          {props.results.conditionText && <div className="results-condition">{props.results.conditionText && <div>
              <img src={props.results.icon} alt={"icon"}/>
              <span>{props.results.conditionText}</span>
          </div>}
          </div>}
      </div>
  );
};

export default Results;