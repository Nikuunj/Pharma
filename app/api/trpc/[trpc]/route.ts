import { appRouter } from '@/server';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { prisma } from '@/config/config';

function handler(req: Request) {
   return fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      router: appRouter,
      createContext: () => ({ prisma })
   });
}
export { handler as GET, handler as POST };