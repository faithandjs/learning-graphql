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
import './sass/style.scss'

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
    console.log(data)/*
    data.data.characters.results.map(item => {
      console.log(item.name)
    })
   */
  
    return (
        <div>
            {
              data.data.characters.results.map(item => {
                return (
                  <div className='box'>
                    <div>{item.name}</div>
                    <div><img src={item.image}/></div>
                    <div>{item.status}</div>
                    <div>{item.gender}</div>
                    <div>Location {item.location.name}</div>
                    <div>Origin {item.origin.name}</div>
                    <div>{item.species}</div>
                  </div>
                  
                  )
              })
            }
        </div>
    );
}

export default Main;