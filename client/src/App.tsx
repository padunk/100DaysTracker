import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import AddChallenge from "./components/AddChallenge/AddChallenge";
import DetailChallenge from "./components/DetailChallenge/DetailChallenge";
import SkillList from "./components/SkillList/SkillList";

function App() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/add' exact component={AddChallenge} />
            <Route path='/detail/:challengeID' component={DetailChallenge} />
            <Route path='/skill-list' component={SkillList} />
        </Switch>
    );
}

export default App;
