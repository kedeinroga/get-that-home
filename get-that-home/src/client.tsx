import { ApolloClient  } from '@apollo/client'
import { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from '@apollo/client/link/context';
import { createLink } from 'apollo-absinthe-upload-link';

// const client = new ApolloClient({
//   uri: 'http://127.0.0.1:3000/graphql',
//   cache: new InMemoryCache(),
// })

const httpLink = createLink({
  uri: 'http://127.0.0.1:3000/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

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

export { client }


