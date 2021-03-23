import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss';



export default function Results(props){
    return(
      <div className ="App-Result">
        <p>Count</p>
        <JSONPretty  data={props.data.count}></JSONPretty>  
        <p>Headers</p>
        <JSONPretty  data={props.data.headers}></JSONPretty>  
        <p>Results</p>
        <JSONPretty  data={props.data.results}></JSONPretty> 
        {props.data.results.map((poke,i) => <span key={i}>{poke.name}</span>)}
        </div>
    )
  }