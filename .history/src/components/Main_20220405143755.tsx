import React, {useState} from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    from,
    useQuery,
    HttpLink,
    gql
  } from "@apollo/client";
  import {onError} from '@apollo/client/link/error'

function Main() {
    const [data, setData] = useState([])

    const client = new ApolloClient({
      uri: 'https://48p1r2roz4.sse.codesandbox.io',
      cache: new InMemoryCache()
    });
  
    client
    .query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `
    })
  .then(result => console.log(result));
    return (
        <div>
            <h1>deba</h1> 
        </div>
    );
}

export default Main;