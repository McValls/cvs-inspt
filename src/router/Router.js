import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import CurriculumVitaeComponent from "../curriculumVitae/CurriculumVitae";
import Login from "../login/Login";
import SignUp from "../signUp/SignUp";

class MyRouter extends React.Component {

    render() {
        return (
            <Router>
                <Routes />
            </Router>
        )
    }

}

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={ props => <Login {...props} />} />
                <Route exact path="/sign-up" render={ props => <SignUp {...props} />} />
                <Route exact path="/cv" render={ props => <CurriculumVitaeComponent {...props} />} />
            </Switch>
        )
    }
}

export default MyRouter;