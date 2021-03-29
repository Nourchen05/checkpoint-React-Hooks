import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieApp from "./Components/MovieApp/MovieApp";
import Trailer from "./Components/Trailer/Trailer";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <MovieApp />
      </Route>
      <Route  path="/trailer/:id" component={Trailer} />
    </div>
  );
}

export default App;
