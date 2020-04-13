import React, { Component } from 'react';
import './search.css'

class Search extends Component {
    state = {  }

    handleClick = ()=>{
        if(!this.input.value){
            alert('please enter a username !');
            return false;
        }
        this.props.searchName(this.input.value);
        this.input.value = '';
    }

    // handleFocus = (e)=>{
    //     document.addEventListener('keyup',(e)=>{
    //         let event = e || window.event;
    //         let key = event.which || event.keyCode || event.charCode;
    //         if (key == 13) {
    //             this.handleClick();
    //         }
       
    //     });
    // }


    render() { 
        return ( 
        <div className='search'>
            <img src={require('../assets/github_badge.png')}></img>
            <input onFocus={this.handleFocus} ref={input=>this.input=input} placeholder="enter a github username" />
            <button onClick={this.handleClick}>Search</button>
        </div>
        );
    }
}
 
export default Search;