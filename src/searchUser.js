import React, { Component } from 'react';
import './searchUser.css';
import Search from './components/search'
import Main from './components/main'

class searchUser extends Component {
    state = { 
        searchName:''
     }

     setSearchName = (name)=>{
        this.setState({searchName:name});
     }

    render() { 
        return ( 
            <div>
                <header>
                    <h1>Search for Github Users</h1>
                    <Search searchName={this.setSearchName} />
                    
                </header>
                
                <Main searchName={this.state.searchName} />
            </div>
         );
    }
}
 
export default searchUser;