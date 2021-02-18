import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/Home";
import NewStory from "./pages/new-story/NewStory";
import Topics from "./pages/topics/Topics";
import Read from "./pages/read/Read";
import Search from "./pages/search/Search";
import Stats from "./pages/stats";
import Stories from "./pages/stories";
import LogIn from "./pages/LogIn/LogIn";
import LogIn from "./pages/Register/Register";

import uniqid from "uniqid";

const routes = [
  { path: "/", component: Home },
  { path: "/new-story", component: NewStory },
  { path: "/topics", component: Topics },
  { path: "/read/:slug", component: Read },
  { path: "/search", component: Search },
  { path: "/stats", component: Stats },
  { path: "/stories", component: Stories },
  { path: "/login", component: LogIn },
  { path: "/register", component: Register }
]

function App() {
  return (
    <Router>
      <NavBar />
      {
        routes.map(({ path, component }) =>
          <Route exact path={path} component={component} key={uniqid()} />
        )
      }
    </Router>
  );
}

export default App;
