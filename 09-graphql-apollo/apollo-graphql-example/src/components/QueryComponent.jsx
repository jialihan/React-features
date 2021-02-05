import React from 'react'
import { useQuery, gql } from '@apollo/client';

const HATS_COLLECTION = gql`
{
  getCollectionsByTitle(title: "hats") {
    id
    title
    items {
      id
      name
      price
      imageUrl
    }
  }
}
`;

const HATS_COLLECTION_2 = gql`
  query getCollectionsByTitle ($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const QueryComponent = () => {
  // const { loading, error, data } = useQuery(HATS_COLLECTION);
  const { loading, error, data } = useQuery(HATS_COLLECTION_2,
    {
      variables: { title: "hats" },
    });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { getCollectionsByTitle = {} } = data;
  return (
    <div>
      {getCollectionsByTitle && <h2>Collection id: {getCollectionsByTitle.id} </h2>}
      {
        getCollectionsByTitle && getCollectionsByTitle.items.map(item => (
          <div key={item.id}>
            <p>{item.name}: ${item.price}</p>
            <img src={item.imageUrl} />
          </div>
        ))
      }
    </div>
  )
}
