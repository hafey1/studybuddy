import React, { Component } from 'react';
import './App.scss';
import Resources from './resources';

class App extends Component {
  constructor() {
    super();

    this.state={
      search:null
    }
  }


  searchResource = (event) => {
        
    return null;
  }
  
  render(){
    const items = Resources.map(data=>{
      return(
      
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span>{data.name}</span>
            <span>{data.college}</span>
            <a href={JSON.stringify(data.link)}>{JSON.stringify(data.link)}</a>
          </li>
        </ul>
      )
    })
    return (
      <div className="parent">
        <nav><button>Logo</button>Sign in</nav>
        <div className="container">
        
          <aside style={{backgroundColor: "whitesmoke"}}>Friends<p>update Feed</p><br></br></aside>
          <div className="searchbar">
            <input 
              type="text" 
              placeholder="Enter item to be searched" 
              onKeyPress={(e)=>this.searchResource(e)} />
            </div>
     
        </div>
        <footer>footer</footer>
      </div>
    );
  }
}
export default App;
