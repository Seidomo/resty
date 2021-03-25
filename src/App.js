
import './App.css';
import React from 'react';


import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import { If, isObjectEmpty } from './components/if/if.js';
// import Main from './components/main/main.js';
import Results from './components/results/results.js';
import History from './components/history/history.js';
import Home from './components/homepage/home-page.js';
import Help from './components/help-page/help-page.js';
import HistoryPage from './components/history/history-page.js';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

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

      componentDidMount() {
        this.setState({ history: JSON.parse(localStorage.getItem('history')) });
      }
    
  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App" role= "application">

<div className="App" role="application">
      <BrowserRouter>
        <nav>
          <NavLink activeClassName="selected" to="/" >Home</NavLink>
          <NavLink activeClassName="selected" to="/history" >History</NavLink>
          <NavLink activeClassName="selected" to="/help" >Help</NavLink>
        </nav>
        <Switch>
         <Route path="/history" component={HistoryPage}></Route>
          <Route path="/" component={Home}><Home /></Route>
          <Route path="/help" component={Help}><Help /></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
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
