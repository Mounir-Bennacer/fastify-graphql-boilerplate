import { db } from "@/db";
import { ApolloServer } from "@apollo/server";
import { config } from "@config";
import Fastify from "fastify";
import { Client } from "pg";
import { loadModules } from "@/modules";
// import { fastifyApollo } from "@as-integrations/fastify";

const envToLogger = {
  local: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
      },
    },
  },
  production: true,
  test: false,
} as const;

type EnvKeys = keyof typeof envToLogger;

const startServer = async (): Promise<void> => {
  const server = Fastify({ logger: envToLogger[config.APP_ENV as EnvKeys] });

  const dbClient = new Client({
    connectionString: config.DB_URL,
  });

  // const context = () => {
  //   return {
  //     db,
  //   };
  // };

  try {
    await dbClient.connect();

    server.log.info("Connected to database successfully");

    await server.listen({ port: config.APP_PORT });

    const { typeDefs, resolvers } = loadModules();

    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      // context,
    });

    await apolloServer.start();

    // server.register(fastifyApollo(apolloServer), {
    //   path: "/graphql",
    // });

    await server.listen({ port: config.APP_PORT });
    server.log.info(`** Server listening on port ** ${config.APP_PORT}`);
  } catch (error) {
    console.error({ error });
    server.log.error(`Database connection failed: ${error}`);

    await dbClient.end();

    process.exit(1);
  }
};

export default startServer;
