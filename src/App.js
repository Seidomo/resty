
import './App.css';
import React from 'react';


import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import { If, isObjectEmpty } from './components/if/if.js';
import Main from './components/main/main.js';
import Results from './components/results/results.js';
import History from './components/history/history.js';
// Classes need to extend the React.Component class from the react library

class App extends React.Component {
  constructor() {
    // this function activates React.Component powers from the imported library.
    super();
    // this object shoudl contain all information ourcomponent needs
    this.state = {
      count: 0,
      results: [],
      req: {},
    }
   
  }


  

  updateResults = ( req) => {

    
    let updatedHistory = req.error ? [...this.state.results] : [...this.state.results, req];

    this.setState({
      req: req,
      count: req.count,
      results: updatedHistory,
    }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.results));
    });
    // this.setState({
    //   results: data.results,
    //   count: data.count,
    //   headers: headers,
    //     });

      }
  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <Header />
        <Form updateResults={this.updateResults} results={this.state.results}/>

        <div className="App-main">
        <History results={this.state.results} />
        <If condition = {isObjectEmpty(this.state.req)} >
        <Results data= {this.state}/>
        </If>
        {/* <Main /> */}
        
        </div>
       
        <div>
         
        <Footer />
        </div>
        
      </div>
      

     

    )
  }
}



export default App;
