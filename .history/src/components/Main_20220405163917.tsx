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

    /*const client = new ApolloClient({
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
  .then(result =>{ 
    console.log(result)
    setData(result)
  });*/
 // console.log( data)

    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Host': 'rick-and-morty-graphql.p.rapidapi.com',
        'X-RapidAPI-Key': 'dade784df8mshec7a49ace3a7ab2p1e6237jsnb53492cfaaba'
      }
    };

    fetch('https://rick-and-morty-graphql.p.rapidapi.com/', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    return (
        <div>
            deba
        </div>
    );
}

export default Main;