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
    
    if(!localStorage.getItem('rick-and-morty-data')){
        const client = new ApolloClient({
          uri: 'https://rickandmortyapi.com/graphql',
          cache: new InMemoryCache()
        });
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
                  location{
                    name
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
      });
    }

    console.log(data)
  
    return (
        <div className='main'>
            {
              data.data.characters.results.map(item => {
                const classes  = 'box box' + item.id 
                return (
                  <div className={classes}>
                    <div>{item.name}</div>
                    <div className='img-box'><img src={item.image}/></div>
                    <div>{item.status}</div>
                    <div>Location {item.location.name}</div>
                    <div>{item.species}</div>
                  </div>
                  )
              })
            }
        </div>
    );
}

export default Main;