import { gql } from "@apollo/client";

export const GET_ALL_BLOGS = gql`
  query Blogs {
    blogs {
      id
      title
      content
      imageUrl
      likes {
        like
      }
      tags {
        tag
      }
      category
      createdAt
    }
  }
`;
