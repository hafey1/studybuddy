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
      if (foundSomething) { 
          console.log("Hello")
          this.setState({landingPage : false})
          this.setState({listingPage : true })
          return event.target.value
      } 
    }
    return null
  }
  
  render(){


    const smallbuttons = () => {
      return "backgroundColor: rgba(251, 251, 251, 0.87)"
    }

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
        <nav>
          <EmojiPeopleTwoToneIcon className="emoji" />
          

            <ButtonGroup className="signInSettings"
              orientation="horizontal"
              color="white"
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
              <div style={{backgroundColor: "rgba(208, 225, 241, .8)" }}></div>
              
              <div className="friendTab">
              <Button  variant="contained" style={{width : "100%"}}>Your Subjects</Button>
              <div className="friends">
                    <Button>*New Post* Linear Algebra</Button>
                    <Button style={{backgroundColor : "rgba(251, 251, 251, .87)"}} >*New Post* Calculus</Button>
                    <Button style={{backgroundColor : "rgba(251, 251, 251, .87)"}} disableElevation>*New Post* Organic Chemistry</Button>
                    <Button style={{backgroundColor : "rgba(251, 251, 251, .87)"}} disableElevation>*New Post* British Literature: Charles Dickens</Button>
                  </div>
              </div>
              <div className="colleges">
                    <Button variant= "contained">Your Colleges</Button>
                    <Button style={{backgroundColor : "rgba(251, 251, 251, .87)"}} disableElevation>College of Charleston</Button>
                    <Button style={{backgroundColor : "rgba(251, 251, 251, .87)"}} disableElevation>Harvard University</Button>
                    <Button style={{backgroundColor : "rgba(251, 251, 251, .87)"}} disableElevation>Oxford University</Button>


              </div>
            </div>
            
              </aside>
              { this.state.landingPage ?
          
                <div className="backgroundSearchBar">   
            <div className="searchbar">
              <input 
                type="text" 
                placeholder="Search for your college, class, or classmate" 
                onKeyPress={(e)=>this.searchResource(e)} />
              <IconButton style= {{borderRadius: "0%", backgroundColor : "rgba(224,224,224, .6)" }} onClick={()=>{console.log(this.state.searchResult)}}><SearchIcon/></IconButton>
              </div>
            </div> : <div className="Repo"> <ViewRepo></ViewRepo></div>}

        </div>
        <footer>
        <Button>Privacy Policy</Button>
         <Button>About Us</Button>
         <Button>Help</Button>
        </footer>
      </div>
    );
  }
}
export default App;
