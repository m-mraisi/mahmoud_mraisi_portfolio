import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Hero />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
