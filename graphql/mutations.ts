import { gql } from "@apollo/client";

export const CREATE_BLOG = gql`
  mutation Mutation(
    $userId: String
    $title: String
    $content: String
    $imageUrl: String
    $category: Category
  ) {
    createBlog(
      userId: $userId
      title: $title
      content: $content
      imageUrl: $imageUrl
      category: $category
    ) {
      id
    }
  }
`;
