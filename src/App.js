import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Components/Home/Home";
import "./App.css";
import ProductDetails from "./Components/ProductDetails/ProductDetails"

function HomePage() {
    return (
        <>
            <BrowserRouter>
                <div id="main-div">
                    <TopBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/productdetails" component={ProductDetails} />
                        <Route component={() => { return (<h1>Forbidden</h1>) }} />
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    )
}

export { HomePage }