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
    comment: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.comment.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
};
