/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProjectData = /* GraphQL */ `
  mutation CreateProjectData(
    $input: CreateProjectDataInput!
    $condition: ModelProjectDataConditionInput
  ) {
    createProjectData(input: $input, condition: $condition) {
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
export const updateProjectData = /* GraphQL */ `
  mutation UpdateProjectData(
    $input: UpdateProjectDataInput!
    $condition: ModelProjectDataConditionInput
  ) {
    updateProjectData(input: $input, condition: $condition) {
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
export const deleteProjectData = /* GraphQL */ `
  mutation DeleteProjectData(
    $input: DeleteProjectDataInput!
    $condition: ModelProjectDataConditionInput
  ) {
    deleteProjectData(input: $input, condition: $condition) {
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
