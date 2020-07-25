import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Contact from './components/Contact';
import Projects from './components/Projects';
import Project from './components/Project';
import Nav from "./shared/Nav";
import Main from './components/Main'
import About from './components/About';
import { data } from './data/data'
function App(props) {
  return (
    <div className="App">

      <Nav />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/projects" exact>
          <Projects data={data} />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/projects/:name" render={(props) => {
          const { name } = props.match.params;
          return <Project data={data} id={name} />
        }}>
        </Route>

      </Switch>
    </div>
  )

}

export default App;
