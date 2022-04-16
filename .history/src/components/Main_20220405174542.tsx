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
  const [data, setData] = useState(localStorage.getItem('rick-and-morty-data')? JSON.parse(localStorage.getItem('rick-and-morty-data')):{})

    const client = new ApolloClient({
      uri: 'https://rickandmortyapi.com/graphql',
      cache: new InMemoryCache()
    });
    /*
    client
    .query({
      query: gql`
        query{
          characters{
            results{
              id
              name
              status
              species
              type
              gender
              origin{
                name
                type
                dimension
              }
              location{
                name
                type
                dimension
              }
              image
            }
          }
        }
      `
    })
  .then(result =>{ 
    console.log(result)
    localStorage.setItem('rick-and-morty-data', JSON.stringify(result))
    setData(result)
  });*/
    console.log(data)
    data.data.characters.results.map(item => {
      console.log(item)
    })
   
  
    return (
        <div>
            
        </div>
    );
}

export default Main;