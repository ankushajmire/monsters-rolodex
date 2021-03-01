import {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // .then(users=> console.log(users) )
            .then(users => this.setState({monsters: users}));
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonster = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox
                    placeholder="search monster"
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonster}/>
            </div>

        )
    }
}

export default App;
