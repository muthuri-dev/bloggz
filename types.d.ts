import { Blog, Comment, Like, PrismaClient } from "@prisma/client";

type Context = {
  prisma: PrismaClient;
};

interface IBlogs extends Blog {
  likes: Like[];
  tags: Tag[];
  blogComments: Comment[];
}

type TParams = {
  params: {
    blogId: string;
  };
};
