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
    const [data, setData] = useState<object>({})

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
            rate
           } 
        }
      `
    })
  .then(result =>{ 
    console.log(result)
    setData(result)
  });
  console.log( data)
    return (
        <div>
            deba
        </div>
    );
}

export default Main;