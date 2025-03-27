import { Hono } from "hono";
import { tokenMiddleware } from "./middelwares/token-middelware.js";

export const commentsRoutes = new Hono();

commentsRoutes.get("/on/:postId", async (context) => {
  const postId = context.req.param("postId");
});

commentsRoutes.post("/on/:postId", tokenMiddleware, async (context) => {
  const postId = context.req.param("postId");

  const { content } = await context.req.json();
});

commentsRoutes.delete("/:commentId", tokenMiddleware, async (context) => {
  const commentId = context.req.param("commentId");
});

commentsRoutes.put("/:commentId", tokenMiddleware, async (context) => {
  const commentId = context.req.param("commentId");
});