/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJokeAppData = /* GraphQL */ `
  query GetJokeAppData($id: ID!) {
    getJokeAppData(id: $id) {
      id
      queryName
      jokesGenerated
      createdAt
      updatedAt
    }
  }
`;
export const listJokeAppData = /* GraphQL */ `
  query ListJokeAppData(
    $filter: ModelJokeAppDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJokeAppData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        queryName
        jokesGenerated
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const jokesQueryName = /* GraphQL */ `
  query JokesQueryName(
    $queryName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelJokeAppDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    jokesQueryName(
      queryName: $queryName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        queryName
        jokesGenerated
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const generateAJoke = /* GraphQL */ `
  query GenerateAJoke($input: AWSJSON!) {
    generateAJoke(input: $input)
  }
`;
