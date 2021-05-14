import React from "react";

import "./App.css";
import { Route } from "react-router";

import CoinSummaryPage from "./pages/CoinSummaryPage";
import CoinDetail from "./pages/CoinDetail";

const App = () => {
  return (
    <div className="container">
      <Route path="/" component={CoinSummaryPage} exact />
      <Route path="/coins/:id" component={CoinDetail} />
    </div>
  );
};

export default App;
