import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";

import Header from "./components/Header/Header";

//I imported header in order to allow us to have the header displayed on every page
//routes are displayed in a jsx object and we are auto routed to '/'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        {routes}
      </HashRouter>
    </div>
  );
}

export default App;
