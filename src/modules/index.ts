import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import path from "path";
import fs from "fs";
import { DocumentNode } from "graphql";
import { IResolvers } from "@graphql-tools/utils";

export function loadModules() {
  const modulesDir = path.join(__dirname);

  const typeDefsArray: (string | DocumentNode)[] = [];
  const resolversArray: IResolvers[] = [];

  const userModulePath = path.join(modulesDir, "users/graphql");

  // Check if user module's typeDefs and resolvers exist and load them
  const typeDefsPath = path.join(userModulePath, "user.typeDef.ts");
  const resolversPath = path.join(userModulePath, "user.resolver.ts");

  if (fs.existsSync(typeDefsPath)) {
    const { userTypeDefs } = require(typeDefsPath);
    typeDefsArray.push(userTypeDefs);
  }

  if (fs.existsSync(resolversPath)) {
    const { userResolver } = require(resolversPath);
    resolversArray.push(userResolver);
  }

  // Merge typeDefs and resolvers
  const typeDefs = mergeTypeDefs(typeDefsArray);
  const resolvers = mergeResolvers(resolversArray);

  return { typeDefs, resolvers };
}
