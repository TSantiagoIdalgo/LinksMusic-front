import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';

interface ApolloConfig {
    headers: Headers
}

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
});
  
const authLink = new ApolloLink((operation, forward) => {
  const token = window.localStorage.getItem('USER_INFO') || 
                window.sessionStorage.getItem('USER_INFO');
  
  operation.setContext(({ headers }: ApolloConfig) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));
  
  return forward(operation);
});
  
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});