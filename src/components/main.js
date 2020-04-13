import React, { Component } from 'react';
import './main.css';
import axios from 'axios';

class Main extends Component {
    state = { 
        users : '',
     }

    componentWillReceiveProps(nextProps){
        
        axios.get(`https://api.github.com/search/users?q=${nextProps.searchName}`)
            .then(response=>{
                console.log(response.data.items);
                
                this.setState({users:response.data.items});
            }).catch(error=>{
                console.log(error);
            });
        
    }

    render() { 

        

        
        if(this.state.users.length ){
            return (<div className="mainWrap">
            {
                this.state.users.map((item,index)=>(
                    <div key={index}>
                        <img src={item.avatar_url} />
                        <p>{item.login}</p>
                        <a href={item.html_url} target="_blank"><button>View Github</button></a>
                    </div>
                ))
                
            }
        </div>)
        }else{
            return <div className='startNote'>Please type in the username you want to look up</div>
        }

        
        
        
         
    }
}
 
export default Main;