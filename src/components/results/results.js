import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss';



export default function Results(props){
    return(
      <div  className="App-mainbody">
      <div className ="App-Result">
        <ul>Count</ul>
        {/* <JSONPretty  data={props.data.count}></JSONPretty>   */}
        <ul className= "results">Headers</ul>
        {/* <JSONPretty  data={props.data.headers}></JSONPretty>   */}
        <ul >Results</ul>
        <JSONPretty  data={props.data.results}></JSONPretty> 
        
        
        </div>
        
        </div>
    )
  }