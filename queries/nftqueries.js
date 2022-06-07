import {gql, request} from "graphql-request"

const GRAPH_URL = process.env.NEXT_PUBLIC_GRAPH_URL

// get ALL NFT collections 

export const fetchAllCollections = async () => {
    const collectionsQuery = gql`
    {
        nftCollections {
          id
          price
          publishedAt
          quantity
          collectionName
          collectionDescription
          githubUrl
          etherscanUrl
          contractAddress
          displayImage {
            url
          }
        }
      }
    `
    
    const collections = await request(
        GRAPH_URL,
        collectionsQuery
    )

    return collections
}