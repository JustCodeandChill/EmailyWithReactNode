import React, {Component} from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Landing = () => <h2>Lanidng</h2>
const SurveyNew = () => <h2>Survey New</h2>
const DashBoard = () => <h2>Dashboard</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                
                <BrowserRouter>
                    <div>
                    <Header />
                        <Route path="/" exact component={Landing}></Route>
                        <Route path="/surveys" exact component={DashBoard}></Route>
                        <Route path="/surveys/new"  component={SurveyNew}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null , actions)(App);