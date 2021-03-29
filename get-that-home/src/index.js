import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import client from "./client";
import Login from "./components/auth/Login";
import UpdateUser from "./components/users/UpdateUser";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      <Login />
      <UpdateUser />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
