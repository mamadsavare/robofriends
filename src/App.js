import React from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll.js'

class App extends React.Component{
    constructor(){
        super();
            this.state ={
                robots : [],
                Searchfield : ''
            }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}))
    }

    onSearchChange = (event) => {
        this.setState({Searchfield: event.target.value});   
       
    }


    render(){
        const filteredRobot = this.state.robots.filter (robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.Searchfield.toLocaleLowerCase());
        })

        return(
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox  searchChange ={this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobot}/>
                </Scroll>
            </div>
        );
    }
}
export default App;