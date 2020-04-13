import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      repoName: '',
      repoUrl: '',
      loading:'LOADING.....'
     }
  }

  componentDidMount(){
    axios.get("https://api.github.com/search/repositories?q=jquery&sort=stars")
    .then(response=>{
      console.log(response);
      this.setState({
        repoName: response.data.items[0].name,
        repoUrl: response.data.items[0].html_url
      })
    }).catch((error)=>{
      this.setState({
        loading:'we can not find a result !!'
      });
      console.log(error);
      
    })
  }

  
  render() { 
    
      if(!this.state.repoName){
        return <h1>{this.state.loading}</h1>
      }else{
        return <h2>the repo is <a href={this.state.repoUrl}>{this.state.repoName}</a></h2>
      }
   
  }
}
 
export default App;


