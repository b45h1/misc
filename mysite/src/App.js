import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.png';

// import NavBar from './AppBar.js'
// import ButtonAppBar from './AppBar';
import SearchBar from './components/searchBar';
import Section from './components/sections';
import SimpleMediaCard from './components/tiles';
import MenuButtons from './components/menu';
// import { Exception } from 'handlebars';

// import NavBar from './AppBar';
let name=[];
let length;
let tagName;
let showAbout;
class App extends Component {

  
  constructor(props){
    super(props);
    this.state={searchTerm:"",showPersonalInfo:false};
  }

  showPersonalInformation(value){
    this.setState({showPersonalInfo:value});
  }

  contentSearch(term){
    this.setState({searchTerm:term});
    var parseString = require('react-native-xml2js').parseString;
    // var xml = require('./assets/users.xml');//
    var xml ='<?xml version="1.0" encoding="UTF-8" ?><person><name>Mubashir Nisar</name><contact><mobile>+447515822901</mobile><email>ping@mubashir.me</email><facebook></facebook><linkedin></linkedin></contact><about></about><jobhistory><employer><name>IHG</name><jobtitle>Senior Developer</jobtitle><years>8</years><responsibilities></responsibilities></employer></jobhistory><educationhistory><degree><institute>University of Herfordshire</institute><degreetitle>Masters of Computer Science</degreetitle><year></year></degree></educationhistory><interests><hobbies><title>Cycling</title><accomplishment></accomplishment></hobbies><hobbies><title>Hiking</title><accomplishment></accomplishment></hobbies></interests></person>';
    
    parseString(xml, function (err, result) {
      //name=result.person.name;
      name = ["mubashir nisar", "mubashir", "about you", "who are you", "know you", "personal information", "name", "Name"];
      
      length = name.length;
      term = term.toLowerCase();
      while(length--) {
        if (term.indexOf(name[length])!= -1) {
            // one of the substrings is in yourstring
            showAbout=true;
            this.showPersonalInformation("true");
            break;
            console.log(length)
        }else{
          showAbout=false;
          this.showPersonalInformation("false");
        }
      }
    });
  }

  render() {
    return (
      <div>
         
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        
        {/* <Section term={this.state.searchTerm}/> */}
        <div className="leftCol">
          <SearchBar onSearchTermChange={term => this.contentSearch(term)}/>
          <MenuButtons onClickToggle={value => this.showPersonalInformation(value)}/>
        </div>
        <div className="rightCol">
          {/* <SimpleMediaCard name={name} showcard={this.state.searchTerm.includes(name) ? true : false}/> */}
          <SimpleMediaCard name={name} showcard={showAbout}/>
          {/* <SimpleMediaCard name={name} showcard={this.state.showPersonalInfo}/> */}
        </div>
        </div>
    );
  }

  
}

export default App;
