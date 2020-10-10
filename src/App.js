// App js from Cole Branch
// Class to display: "College of Charleston CSCI 230"
import React, { Component } from 'react';
import './App.scss';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Resources from './resources';
import ViewRepo from './ViewRepo'
import TableTest from './TableTest'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
      for(let i = 0; i < this.state.fakeData.length; i++) {
        if (this.findSpecificStr(this.state.fakeData[i], event.target.value)) {
          
          foundSomething = true
          let added = this.state.searchResult
          added.push(this.state.fakeData[i])

          this.setState({searchResult : added})
        }   
      }
<<<<<<< HEAD
      if (foundSomething) { 
=======
      if (foundSomething) 
>>>>>>> 3d8a46f345f74260f3489f01281c1549452a27ff
          this.setState({landingPage : false})
          this.setState({listingPage : true })
          return event.target.value
      } 
    }
    return null
  }
  
  render(){

    const items = Resources.map(data=>{
      return(
        <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span>{data.name}</span>
            <span>{data.college}</span>
            <a href={JSON.stringify(data.link)}>{JSON.stringify(data.link)}</a>
          </li>
        </ul>
        </div>
        
      )
    })
    return (
      <div className="parent">
<<<<<<< HEAD
        <nav>
          <EmojiPeopleTwoToneIcon className="emoji" />
          

            <ButtonGroup className="signInSettings"
              orientation="horizontal"
              color="primary"
              aria-label="horizontal primary button group"
              variant="text"
              >
              
              <Button>Account</Button>
              <IconButton>
                <SettingsIcon/>
              </IconButton>
              
          
            </ButtonGroup>
        </nav>
        <div className="container">
        
          <aside style={{backgroundColor: "whitesmoke"}}>
              <div className="friendTab">
                <Button variant="contained" style={{width : "100%"}}>friends</Button>
                <div className="friends">
                  <Button>Bill Gates</Button>
                  <Button>Jeff Bezos</Button>
                  <Button>Elon Musk</Button>
                  <Button>Albert Einstein</Button>
                  <Button>Gottlieb Frege</Button>
                  <Button>Baruch Spinoza</Button>
              </div>
            </div>
            
            <div className="favorites">
              <div style={{backgroundColor: "black" }}></div>
              
              <div className="subjects"> 
                    <Button className="smallLine" disableElevation>Your Subjects</Button>
                    <Button variant="contained" className="smallLine" disableElevation>*New Post* Linear Algebra</Button>
                    <Button variant="contained" className="smallLine" disableElevation>*New Post* Calculus</Button>
                    <Button variant="contained" className="smallLine" disableElevation>*New Post* Organic Chemistry</Button>
                    <Button variant="contained" className="smallLine" disableElevation>*New Post* British Literature: Charles Dickens</Button>
              </div>
              
              <div className="colleges">
                    <Button>Your Colleges</Button>
              </div>
            </div>
            
              </aside>
              { this.state.landingPage ?
          <div className="backgroundSearchBar">   
            <div className="searchbar">
              <input 
                type="text" 
                placeholder="Search for Resources" 
                onKeyPress={(e)=>this.searchResource(e)} />
              <IconButton onClick={()=>{console.log(this.state.searchResult)}}><SearchIcon/></IconButton>
              </div>
            </div> : <div> <ViewRepo></ViewRepo></div>}

=======
        
        <nav><button>Logo</button>Sign in</nav>
        <div className="container">
        
          <aside style={{backgroundColor: "whitesmoke"}}>Friends<p>update Feed</p><br></br></aside>
          { 
            this.state.landingPage ? <div className="searchbar">
             <input 
              type="text" 
              placeholder="Enter item to be searched" 
              onKeyPress={(e)=>this.searchResource(e)} />
            <button onClick={()=>{console.log(this.state.searchResult)}}>Trouble</button>
          </div > : <div> <ViewRepo></ViewRepo></div>}
>>>>>>> 3d8a46f345f74260f3489f01281c1549452a27ff
        </div>
        <footer>footer</footer>
      </div>
    );
  }
}
export default App;
