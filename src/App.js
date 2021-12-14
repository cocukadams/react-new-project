import './App.css';
// import React, {component} from 'react';
import { Component } from 'react';
import { CardList} from './components/card-list/card-list.component';

import {Searchbox} from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response => Response.json())
  .then(users => this.setState({monsters: users})) 
}

handleChange = (e) => {   //arrow functions burada "bind" yapmaktan kurarıyor
  this.setState({searchField: e.target.value})  //burada da handlechange'i yeniden yapiyoruz.
}

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
      <h1>Monsters Rolodex</h1>
       <Searchbox
       placeholder='search monsters'
       handleChange={this.handleChange}
       />
        <CardList monsters= {filteredMonsters}/>
      </div>
    );
  }
}


export default App;
