import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from "./Components/Search";
import Details from "./Components/Details";
import SearchMovies from "./Components/JustMovies/SearchMovies";

export default function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route path="/SearchMovies" component={SearchMovies} />
                    <Route path='/details/:id' component={Details} />
                </Switch>
            </Router>
        </div>
    )
}