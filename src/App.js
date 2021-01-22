import React from 'react';
import Registration from "./Components/Registration";
import { BrowserRouter as Router } from "react-router-dom";

function App () {
    return (
        <div className="App">
            <Router>
                <Registration/>
            </Router>
        </div>
    );
}

export default App;
