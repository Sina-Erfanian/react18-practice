import { Component } from "react";

class App extends Component {
    state = {
        name : "sina",
        family : "erfanian",
        age : 18
    }

    render() {
        let {name , family , age} = this.state
        return (
            <div>
                <header>
                    <h1>My name is {name} {family} and im {age} years old</h1>
                </header>
            </div>
        )
    }
}

export default App