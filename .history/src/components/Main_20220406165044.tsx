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
  const [data, setData] = useState(localStorage.getItem('rick-and-morty-data')? JSON.parse(localStorage.getItem('rick-and-morty-data')):null)
    const [activeBoxId, setActiveBoxId] = useState(1)
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
    const attachClass = (id) => {
      let classes:string;
      if(id === 1){
        classes  = 'box active box' + id 
      }else{
        classes  = 'box box' + id 
      }
      return classes
    }
    console.log(data, activeBoxId)
    const activeId = (id) => {
      document.querySelector('.box' + id).classList.add('active')
      document.querySelector('.box' + activeBoxId).classList.remove('active')
      setActiveBoxId(id)
    }
    return (
        <div className='main'>
            {data?
              data.data.characters.results.map(item => {
                return (
                  <div key={+item.id} className={attachClass(+item.id)} onClick={()=>activeId(+item.id)}>
                    <div className='name'>{item.name}</div>
                    <div className='img-box'><img src={item.image}/></div>
                    <div className='status'>Status: {item.species}, {item.status}</div>
                    <div className='location'>Location: {item.location.name}</div>
                  </div>
                  )
              })
            : null}
        </div>
    );
}

export default Main;