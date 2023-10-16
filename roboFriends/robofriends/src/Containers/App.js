import React, {Component} from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox'
import { robots } from '../robots';
import { render } from '@testing-library/react';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {return response.json()}).then(users => {this.setState({robots: users})});
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length? 
        <h1>Loading...</h1> :
        (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <Searchbox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = { filteredRobots }/>
                    </Scroll>
                </div>
        );
    }
}

export default App; 