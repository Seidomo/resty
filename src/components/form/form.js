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
    constructor(props){
        super(props);
    
    this.state = {
      input: '',
      method: 'GET'
    };
    
    }

    handleInput = (e) => {
        e.preventDefault();
        this.setState({
           input: e.target.value
        });
    }

    handleMethod = (e) =>{
        e.preventDefault();
        this.setState({
           method: e.target.value
        })
    }

    handleOnSubmit = async (e) =>{
        e.preventDefault();
        
        const req = await fetch(this.state.input, {method: this.state.method, });
       
        const data = await req.json();
        const header = req.headers;
        this.props.updateResults(data, header)
}

    render(){
        return(
            <div className="App-form">
           <form onSubmit={this.handleOnSubmit}>
               <label> URL</label>
               <input onChange = {this.handleInput} type= 'text' value= {this.state.input}/>
               <button>GO</button>
               
               
           </form>
           <form className="App-div">
           
           <button onClick = {this.handleMethod} value= "GET">GET</button>
               <button onClick = {this.handleMethod} value= "POST">POST</button>
               <button onClick = {this.handleMethod} value= "PUT">PUT</button>
               <button onClick = {this.handleMethod} value= "DELETE">DELETE</button>
     
         </form>
            
          </div>
    
        )
    }
}


// slight syntax change from module.exports = Header
export default form;
