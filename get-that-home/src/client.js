import { ApolloClient } from "@apollo/client";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
// import { createHttpLink } from 'apollo-link-http';
import { setContext } from "@apollo/client/link/context";

import { createLink } from "apollo-absinthe-upload-link";

// Create an HTTP link to the Phoenix app's HTTP endpoint URL.
const httpLink = createLink({
  uri: "http://127.0.0.1:3000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("auth-token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Create a link that "splits" requests based on GraphQL operation type.
// Queries and mutations go through the HTTP link.
// Subscriptions go through the WebSocket link.
const link = authLink.concat(httpLink);

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [], // no types provided
    },
  },
});
// Create the Apollo Client instance.
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({ fragmentMatcher }),
});

export default client;
