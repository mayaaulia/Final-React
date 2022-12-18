import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Card } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// TODO: answer here

const AnswerHere = () => (
<BrowserRouter>
<ChakraProvider>
<App />
</ChakraProvider>
</BrowserRouter>
  // TODO: replace this
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnswerHere />
  </React.StrictMode>
);
