// App js from Cole Branch
import React, { Component } from 'react';
import './App.scss';
import Resources from './resources';

class App extends Component {
  constructor() {
    super();

    this.state={
      searchResult: [],
      fakeData: Resources,
      landingPage: true,
      listingPage: false,
      resultPage: false,
    }
  }

 
  
  findSpecificStr = (obj, str) => {
    console.log("I found " + str + "   " + Object.values(obj).includes(str))
    return Object.values(obj).includes(str);
  }
  


  searchResource = (event) => {
    let foundSomething = false
    if(event.key === 'Enter') {
      for(let i = 0; i < this.state.fakeData.length; i++){
        if (this.findSpecificStr(this.state.fakeData[i], event.target.value)) {
          
          foundSomething = true
          let added = this.state.searchResult
          added.push(this.state.fakeData[i])

          this.setState({searchResult : added})
 
        }   
      }
      if (foundSomething)
          this.setState({landingPage : false})
      return event.target.value 
    }
    return null
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
            <button onClick={()=>{console.log(this.state.searchResult)}}>Trouble</button>
            </div>
        </div>
        <footer>footer</footer>
      </div>
    );
  }
}
export default App;
