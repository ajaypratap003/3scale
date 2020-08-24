import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./app/MainPage/MainPage";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/3scale" component={MainPage} exact />
    </BrowserRouter>
  );
}
