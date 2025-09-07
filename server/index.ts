import { publicProcedure, router } from "./trpc";

export const appRouter = router({
   getData: publicProcedure
      .query((opts) => {
         return {
            msg: 'hi ther'
         }
      })
})