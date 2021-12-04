import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
    ApolloClientOptions,
  } from "@apollo/client";
  import { createUploadLink } from "apollo-upload-client";
  
  const BASE_URL:string  = 'http://localhost:6500/graphql'
  
  
  const link = createUploadLink({
    uri: BASE_URL,
  })
  
  export const client:ApolloClient<any>   = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });
  
  
  
  