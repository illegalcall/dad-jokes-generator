/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJokeAppData = /* GraphQL */ `
  mutation CreateJokeAppData(
    $input: CreateJokeAppDataInput!
    $condition: ModelJokeAppDataConditionInput
  ) {
    createJokeAppData(input: $input, condition: $condition) {
      id
      queryName
      jokesGenerated
      createdAt
      updatedAt
    }
  }
`;
export const updateJokeAppData = /* GraphQL */ `
  mutation UpdateJokeAppData(
    $input: UpdateJokeAppDataInput!
    $condition: ModelJokeAppDataConditionInput
  ) {
    updateJokeAppData(input: $input, condition: $condition) {
      id
      queryName
      jokesGenerated
      createdAt
      updatedAt
    }
  }
`;
export const deleteJokeAppData = /* GraphQL */ `
  mutation DeleteJokeAppData(
    $input: DeleteJokeAppDataInput!
    $condition: ModelJokeAppDataConditionInput
  ) {
    deleteJokeAppData(input: $input, condition: $condition) {
      id
      queryName
      jokesGenerated
      createdAt
      updatedAt
    }
  }
`;
