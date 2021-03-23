import React from 'react';
import './form.scss';

// function form() {
//   return (
//     <header className="App-header">
//       <p> this is the form</p>
//     </header>
//   )
// }

class form extends React.Component{
    constructor(){
        super();
    
    this.state = {
      input: '',
      method: 'GET'
    };
    
    }

    addUrl = (e) => {
        this.setState({
           input: e.target.value
        });
    }

    addUrlWithForm = (e) =>{
        this.setState({
           method: e.target.value
        })
    }

    checkChange = async (e) =>{
        e.preventDefault();
        
        const req = await fetch(this.state.input, {method: this.state.method, });
       
        const data = await req.json();
        const header = req.headers;
        this.props.updateResults(data, header)
}

    render(){
        return(
            <div className="App-form">
           <form onSubmit={this.checkChange}>
               <label> URL</label>
               <input onChange = {this.addUrl} type= 'text' value= {this.state.input}/>
               <button>GO</button>
               
               
           </form>
           <form className="App-div">
           
           <button onClick = {this.addUrlWithForm} value= "GET">GET</button>
               <button onClick = {this.addUrlWithForm}>POST</button>
               <button onClick = {this.addUrlWithForm}>PUT</button>
               <button onClick = {this.addUrlWithForm}>DELETE</button>
     
         </form>
            
          </div>
    
        )
    }
}


// slight syntax change from module.exports = Header
export default form;
