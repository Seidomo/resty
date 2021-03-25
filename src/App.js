
import './App.css';
import React from 'react';


import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import Main from './components/main/main.js';
import Results from './components/results/results.js';
// Classes need to extend the React.Component class from the react library

class App extends React.Component {
  constructor() {
    // this function activates React.Component powers from the imported library.
    super();
    // this object shoudl contain all information ourcomponent needs
    this.state = {
      count: 0,
      results: [],
      headers: {},
    }
   
  }


  

  updateResults = (data, headers) => {
    this.setState({
      results: data.results,
      count: data.count,
      headers: headers,
        });

      }
  // runs constantly in react, to render things to he DOM.
  render() {
    return (
      <div className="App">
        <Header />
        <Form updateResults={this.updateResults}/>

        <div className="App-main">
        {/* <Main /> */}
        <Results data= {this.state}/>
        </div>
       
        <div>
         
        <Footer />
        </div>
        
      </div>
      

     

    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Click Seid and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
