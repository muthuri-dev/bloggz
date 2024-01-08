"use server";
import { auth } from "@/auth";

export async function getSession() {
  const session = await auth();
  return session;
}
