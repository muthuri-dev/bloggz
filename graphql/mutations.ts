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
export const CREATE_COMMENT = gql`
  mutation Mutation($blogId: String, $comment: String) {
    createComment(blogId: $blogId, comment: $comment) {
      id
    }
  }
`;
export const ADD_LIKE = gql`
  mutation Mutation($like: Int, $blogId: String) {
    addLike(like: $like, blogId: $blogId) {
      id
    }
  }
`;
