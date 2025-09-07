import { prisma } from "@/config/config";
import { initTRPC }  from "@trpc/server"

function createContextType() {
   return {
      prisma
   }
}

const t = initTRPC.context<typeof createContextType>().create();

export const router = t.router;
export const publicProcedure = t.procedure;