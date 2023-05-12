import { createGraphQLHandler } from '@redwoodjs/graphql-server';
let directives = {};
import * as directives_requireAuth_requireAuth from "../directives/requireAuth/requireAuth";
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
import * as directives_skipAuth_skipAuth from "../directives/skipAuth/skipAuth";
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
import * as sdls_citations_sdl from "../graphql/citations.sdl";
sdls.citations_sdl = sdls_citations_sdl;
import * as sdls_courts_sdl from "../graphql/courts.sdl";
sdls.courts_sdl = sdls_courts_sdl;
import * as sdls_messages_sdl from "../graphql/messages.sdl";
sdls.messages_sdl = sdls_messages_sdl;
let services = {};
import * as services_citations_citations from "../services/citations/citations";
services.citations_citations = services_citations_citations;
import * as services_courts_courts from "../services/courts/courts";
services.courts_courts = services_courts_courts;
import * as services_messages_messages from "../services/messages/messages";
services.messages_messages = services_messages_messages;
import { db } from "../lib/db";
import { logger } from "../lib/logger";
export const handler = createGraphQLHandler({
  loggerConfig: {
    logger,
    options: {}
  },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVHcmFwaFFMSGFuZGxlciIsImRpcmVjdGl2ZXMiLCJkaXJlY3RpdmVzX3JlcXVpcmVBdXRoX3JlcXVpcmVBdXRoIiwicmVxdWlyZUF1dGhfcmVxdWlyZUF1dGgiLCJkaXJlY3RpdmVzX3NraXBBdXRoX3NraXBBdXRoIiwic2tpcEF1dGhfc2tpcEF1dGgiLCJzZGxzIiwic2Rsc19jaXRhdGlvbnNfc2RsIiwiY2l0YXRpb25zX3NkbCIsInNkbHNfY291cnRzX3NkbCIsImNvdXJ0c19zZGwiLCJzZGxzX21lc3NhZ2VzX3NkbCIsIm1lc3NhZ2VzX3NkbCIsInNlcnZpY2VzIiwic2VydmljZXNfY2l0YXRpb25zX2NpdGF0aW9ucyIsImNpdGF0aW9uc19jaXRhdGlvbnMiLCJzZXJ2aWNlc19jb3VydHNfY291cnRzIiwiY291cnRzX2NvdXJ0cyIsInNlcnZpY2VzX21lc3NhZ2VzX21lc3NhZ2VzIiwibWVzc2FnZXNfbWVzc2FnZXMiLCJkYiIsImxvZ2dlciIsImhhbmRsZXIiLCJsb2dnZXJDb25maWciLCJvcHRpb25zIiwib25FeGNlcHRpb24iLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZnVuY3Rpb25zL2dyYXBocWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR3JhcGhRTEhhbmRsZXIgfSBmcm9tICdAcmVkd29vZGpzL2dyYXBocWwtc2VydmVyJ1xuXG5pbXBvcnQgZGlyZWN0aXZlcyBmcm9tICdzcmMvZGlyZWN0aXZlcy8qKi8qLntqcyx0c30nXG5pbXBvcnQgc2RscyBmcm9tICdzcmMvZ3JhcGhxbC8qKi8qLnNkbC57anMsdHN9J1xuaW1wb3J0IHNlcnZpY2VzIGZyb20gJ3NyYy9zZXJ2aWNlcy8qKi8qLntqcyx0c30nXG5cbmltcG9ydCB7IGRiIH0gZnJvbSAnc3JjL2xpYi9kYidcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy9saWIvbG9nZ2VyJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZUdyYXBoUUxIYW5kbGVyKHtcbiAgbG9nZ2VyQ29uZmlnOiB7IGxvZ2dlciwgb3B0aW9uczoge30gfSxcbiAgZGlyZWN0aXZlcyxcbiAgc2RscyxcbiAgc2VydmljZXMsXG4gIG9uRXhjZXB0aW9uOiAoKSA9PiB7XG4gICAgLy8gRGlzY29ubmVjdCBmcm9tIHlvdXIgZGF0YWJhc2Ugd2l0aCBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgIGRiLiRkaXNjb25uZWN0KClcbiAgfSxcbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLG9CQUFvQixRQUFRLDJCQUEyQjtBQUFBLElBQUFDLFVBQUE7QUFBQSxZQUFBQyxrQ0FBQTtBQUFBRCxVQUFBLENBQUFFLHVCQUFBLEdBQUFELGtDQUFBO0FBQUEsWUFBQUUsNEJBQUE7QUFBQUgsVUFBQSxDQUFBSSxpQkFBQSxHQUFBRCw0QkFBQTtBQUFBLElBQUFFLElBQUE7QUFBQSxZQUFBQyxrQkFBQTtBQUFBRCxJQUFBLENBQUFFLGFBQUEsR0FBQUQsa0JBQUE7QUFBQSxZQUFBRSxlQUFBO0FBQUFILElBQUEsQ0FBQUksVUFBQSxHQUFBRCxlQUFBO0FBQUEsWUFBQUUsaUJBQUE7QUFBQUwsSUFBQSxDQUFBTSxZQUFBLEdBQUFELGlCQUFBO0FBQUEsSUFBQUUsUUFBQTtBQUFBLFlBQUFDLDRCQUFBO0FBQUFELFFBQUEsQ0FBQUUsbUJBQUEsR0FBQUQsNEJBQUE7QUFBQSxZQUFBRSxzQkFBQTtBQUFBSCxRQUFBLENBQUFJLGFBQUEsR0FBQUQsc0JBQUE7QUFBQSxZQUFBRSwwQkFBQTtBQUFBTCxRQUFBLENBQUFNLGlCQUFBLEdBQUFELDBCQUFBO0FBTWhFLFNBQVNFLEVBQUU7QUFDWCxTQUFTQyxNQUFNO0FBRWYsT0FBTyxNQUFNQyxPQUFPLEdBQUd0QixvQkFBb0IsQ0FBQztFQUMxQ3VCLFlBQVksRUFBRTtJQUFFRixNQUFNO0lBQUVHLE9BQU8sRUFBRSxDQUFDO0VBQUUsQ0FBQztFQUNyQ3ZCLFVBQVU7RUFDVkssSUFBSTtFQUNKTyxRQUFRO0VBQ1JZLFdBQVcsRUFBRUEsQ0FBQSxLQUFNO0lBQ2pCO0lBQ0FMLEVBQUUsQ0FBQ00sV0FBVyxDQUFDLENBQUM7RUFDbEI7QUFDRixDQUFDLENBQUMifQ==