import "./App.css"
import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header/index"
import Main from "./components/Main/index"
import Footer from "./components/Footer/index"
import Beers from "./components/Beers"
function App() {
  return (
    <Router>
      <div className="App">
        <header className="header-section">
          <Header />
        </header>
        <section className="main-section main-style">
          <Switch>
            <Route path="/beers" component ={Beers}/>
            <Route path="/" component={Main} />
          </Switch>
        </section>
        <section className="footer-section">
          <Footer />
        </section>
      </div>
    </Router>
  )
}

export default App
