export const typeDefs = `#graphql
type User{
    id:ID!
    name:String
    email:String
    image:String
    followers:[Follower]
    blogs:[Blog]
    userComments:[Comment]
    createdAt:String
    updatedAt:String
}
type Follower{
    id:ID!
    follower:Int
    userId:String
    createdAt:String
    updatedAt:String
}
type Blog{
    id:ID!
    title:String
    content:String
    imageUrl:String
    category:Category
    userId:String
    likes:[Like]
    tags:[Tag]
    blogComments:[Comment]
    createdAt:String
    updatedAt:String
}
type Like{
    id:ID!
    like:Int
    blogId:String
    createdAt:String
    updatedAt:String
}
type Tag{
    id:ID!
    tag:String
    blogId:String
    createdAt:String
    updatedAt:String
}
type Comment{
    id:ID!
    comment:String
    blogId:String
    userId:String
    createdAt:String
    updatedAt:String
}
enum Category {
  TECH
  ANDROID
  AI_ML
  WEB
  JOBS
  STARTUPS
  UI_UX
  BOOKS
  DATABASES
}
type Query{
    users:[User]
    blogs:[Blog]
    blog(id:ID!):Blog
    user(id:ID!):User
    comment(id:ID!):Comment
}
# type Mutation{
#     createBlog(title:String,content:String,imageUrl:String,category:Category,userId:String):Blog
#     addLike(like:Int,blogId:String):Like
#     createComment(comment:String,blogId:String):Comment
#     createTag(tag:String,blogId:String):Tag
#     addFollower(follower:Int,userId:String):Follower
#     updateBlog(id:ID!,title:String,content:String,imageUrl:String,category:Category):Blog
#     updateComment(id:ID!,comment:String):Comment
#     deleteBlog(id:ID!):Blog
#     deleteLike(id:ID!):Like
#     deleteComment(id:ID!):Comment
#     deleteTag(id:ID!):Tag
#     deleteFollower(id:ID!):Follower
# }
`;
