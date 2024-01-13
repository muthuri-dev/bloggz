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
        id
        tag
      }
      category
      userId
      createdAt
      blogComments {
        id
      }
    }
  }
`;
export const GET_BLOG_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      name
      image
    }
  }
`;
export const GET_BLOG = gql`
  query Query($id: ID!) {
    blog(id: $id) {
      id
      title
      content
      imageUrl
      likes {
        id
        like
      }
      userId
      createdAt
      blogComments {
        id
        comment
        userId
        createdAt
      }
    }
  }
`;
export const GET_COMMENTS = gql`
  query Comments {
    comments {
      id
      userId
      blogId
      comment
    }
  }
`;
export const GET_USER_BY_EMAIL = gql`
  query Query($email: String) {
    userByEmail(email: $email) {
      id
    }
  }
`;
