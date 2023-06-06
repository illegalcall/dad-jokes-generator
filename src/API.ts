/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJokeAppDataInput = {
  id?: string | null,
  queryName: string,
  jokesGenerated: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelJokeAppDataConditionInput = {
  queryName?: ModelStringInput | null,
  jokesGenerated?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJokeAppDataConditionInput | null > | null,
  or?: Array< ModelJokeAppDataConditionInput | null > | null,
  not?: ModelJokeAppDataConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type JokeAppData = {
  __typename: "JokeAppData",
  id: string,
  queryName: string,
  jokesGenerated: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateJokeAppDataInput = {
  id: string,
  queryName?: string | null,
  jokesGenerated?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteJokeAppDataInput = {
  id: string,
};

export type ModelJokeAppDataFilterInput = {
  id?: ModelIDInput | null,
  queryName?: ModelStringInput | null,
  jokesGenerated?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJokeAppDataFilterInput | null > | null,
  or?: Array< ModelJokeAppDataFilterInput | null > | null,
  not?: ModelJokeAppDataFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelJokeAppDataConnection = {
  __typename: "ModelJokeAppDataConnection",
  items:  Array<JokeAppData | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionJokeAppDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  queryName?: ModelSubscriptionStringInput | null,
  jokesGenerated?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionJokeAppDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionJokeAppDataFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateJokeAppDataMutationVariables = {
  input: CreateJokeAppDataInput,
  condition?: ModelJokeAppDataConditionInput | null,
};

export type CreateJokeAppDataMutation = {
  createJokeAppData?:  {
    __typename: "JokeAppData",
    id: string,
    queryName: string,
    jokesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJokeAppDataMutationVariables = {
  input: UpdateJokeAppDataInput,
  condition?: ModelJokeAppDataConditionInput | null,
};

export type UpdateJokeAppDataMutation = {
  updateJokeAppData?:  {
    __typename: "JokeAppData",
    id: string,
    queryName: string,
    jokesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJokeAppDataMutationVariables = {
  input: DeleteJokeAppDataInput,
  condition?: ModelJokeAppDataConditionInput | null,
};

export type DeleteJokeAppDataMutation = {
  deleteJokeAppData?:  {
    __typename: "JokeAppData",
    id: string,
    queryName: string,
    jokesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetJokeAppDataQueryVariables = {
  id: string,
};

export type GetJokeAppDataQuery = {
  getJokeAppData?:  {
    __typename: "JokeAppData",
    id: string,
    queryName: string,
    jokesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJokeAppDataQueryVariables = {
  filter?: ModelJokeAppDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJokeAppDataQuery = {
  listJokeAppData?:  {
    __typename: "ModelJokeAppDataConnection",
    items:  Array< {
      __typename: "JokeAppData",
      id: string,
      queryName: string,
      jokesGenerated: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type JokesQueryNameQueryVariables = {
  queryName: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelJokeAppDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type JokesQueryNameQuery = {
  jokesQueryName?:  {
    __typename: "ModelJokeAppDataConnection",
    items:  Array< {
      __typename: "JokeAppData",
      id: string,
      queryName: string,
      jokesGenerated: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GenerateAJokeQueryVariables = {
  input: string,
};

export type GenerateAJokeQuery = {
  generateAJoke?: string | null,
};

export type OnCreateJokeAppDataSubscriptionVariables = {
  filter?: ModelSubscriptionJokeAppDataFilterInput | null,
};

export type OnCreateJokeAppDataSubscription = {
  onCreateJokeAppData?:  {
    __typename: "JokeAppData",
    id: string,
    queryName: string,
    jokesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJokeAppDataSubscriptionVariables = {
  filter?: ModelSubscriptionJokeAppDataFilterInput | null,
};

export type OnUpdateJokeAppDataSubscription = {
  onUpdateJokeAppData?:  {
    __typename: "JokeAppData",
    id: string,
    queryName: string,
    jokesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJokeAppDataSubscriptionVariables = {
  filter?: ModelSubscriptionJokeAppDataFilterInput | null,
};

export type OnDeleteJokeAppDataSubscription = {
  onDeleteJokeAppData?:  {
    __typename: "JokeAppData",
    id: string,
    queryName: string,
    jokesGenerated: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
