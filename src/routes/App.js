import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';
import Layout from '../components/Layout';
import Ahorcado from "../components/Ahorcado";
import Simon from "../components/Simon";

const App =() => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path="/" component= {Home} />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/ahorcado" component={ Ahorcado } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/player/:id" component={ Player } />
            <Route exact path="/Simon" component={ Simon } />
            <Route component={ NotFound }/>
        </Switch>
    </Layout>        
    </BrowserRouter>
)

export default App;