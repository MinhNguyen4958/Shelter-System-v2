import React, { Component } from 'react';
import { customerList } from '../services/customerList'

class App extends Component {

    customerList = (e) => {
        customerList()
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <button onClick={e => customerList()}> Hello There! </button>
            </div>
        )
    }

}

export default App;