import { gql } from 'apollo-boost'

export const POSTS_SUBSCRIPTION = gql`
  subscription post($userId: ID!) {
    post(userId: $userId) {
      mutation
      data {
        id
        title
        body
        author {
          name
        }
        like
        published
      }
    }
  }
`
