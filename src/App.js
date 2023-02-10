import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";

function App() {
  return (
    <Layout>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:wght@500&display=swap');
      </style>
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
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
