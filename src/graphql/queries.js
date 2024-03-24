/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProjectData = /* GraphQL */ `
  query GetProjectData($id: ID!) {
    getProjectData(id: $id) {
      id
      titile
      skills
      type
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjectData = /* GraphQL */ `
  query ListProjectData(
    $filter: ModelProjectDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titile
        skills
        type
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
