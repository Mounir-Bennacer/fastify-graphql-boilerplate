import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { userTypeDefs } from "@/modules/users/graphql/users.schema";
import { userResolver } from "@/modules/users/graphql/users.resolver";

export function loadModules() {
  const typeDefs = mergeTypeDefs([userTypeDefs]);

  const resolvers = mergeResolvers([userResolver]);

  return { typeDefs, resolvers };
}
