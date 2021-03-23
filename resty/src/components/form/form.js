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
      url: [],
      method: []
    };
    this.addUrl = this.addUrl.bind(this);
    }

    addUrl(){
        this.setState({
            url : [...this.state.url, this.state.input],
            method: [...this.state.method, this.state.input]
        });
    }

    addUrlWithForm = () =>{
        this.setState({
            url: [...this.state.url, this.state.input]
        })
    }

    checkChange = (e) =>{
        this.setState({input: e.target.value})
    }

    render(){
        return(
            <div className="App-form">
           <form>
               <label> URL</label>
               <input onChange = {this.checkChange} type= 'text' value= {this.state.input}/>
               <button onClick = {this.addUrlWithForm}>GO</button>
               
               
           </form>
           <div className="App-div">
           
           <button onClick = {this.addUrlWithForm}>GET</button>
               <button onClick = {this.addUrlWithForm}>POST</button>
               <button onClick = {this.addUrlWithForm}>PUT</button>
               <button onClick = {this.addUrlWithForm}>DELETE</button>
     
         </div>
            
          </div>
    
        )
    }
}


// slight syntax change from module.exports = Header
export default form;
