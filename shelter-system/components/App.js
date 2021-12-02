import React, { Component } from 'react';
import { getAllCustomers } from '../services/customerService'

class App extends Component {

    getAllCustomers = (e) => {
        getAllCustomers()
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <button onClick={e => getAllCustomers()}> Hello There! </button>
            </div>
        )
    }

}

export default App;