import { Context } from "@/types";

export const resolvers = {
  Query: {
    blogs: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.blog.findMany();
    },
    users: async (_parent: any, _args: any, context: Context) => {
      return await context.prisma.user.findMany();
    },
    blog: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.blog.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    user: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    comments: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.comment.findMany();
    },
    userByEmail: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.findUnique({
        where: {
          email: args.email,
        },
      });
    },
  },
  Blog: {
    tags: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.tag.findMany({
        where: {
          blogId: parent.id,
        },
      });
    },
    blogComments: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.comment.findMany({
        where: {
          blogId: parent.id,
        },
      });
    },
    likes: async (parent: any, _args: any, context: Context) => {
      return await context.prisma.like.findMany({
        where: {
          blogId: parent.id,
        },
      });
    },
  },
  Mutation: {
    createBlog: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.blog.create({
        data: {
          userId: args.userId,
          title: args.title,
          content: args.content,
          imageUrl: args.imageUrl,
          category: args.category,
        },
      });
    },
    createComment: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.comment.create({
        data: {
          blogId: args.blogId,
          comment: args.comment,
        },
      });
    },
    addLike: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.like.create({
        data: {
          blogId: args.blogId,
          like: args.like,
        },
      });
    },
    deleteLike: async (_parent: any, args: any, context: Context) => {
      return context.prisma.like.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};
