const startServer = async (): Promise<void> => {
  const server = Fastify({ logger: envToLogger[config.APP_ENV as EnvKeys] });

  const dbClient = new Client({
    connectionString: config.DB_URL,
  });

  try {
    await dbClient.connect();
    server.log.info("Connected to database successfully");

    const { typeDefs, resolvers } = loadModules();

    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      // context,
    });

    await apolloServer.start();

    // Uncomment the following lines if you want to register Apollo Server with Fastify
    // server.register(fastifyApollo(apolloServer), {
    //   path: "/graphql",
    // });

    await server.listen({ port: config.APP_PORT });
    server.log.info(`Server listening on port ${config.APP_PORT}`);
  } catch (error) {
    console.error({ error });
    server.log.error(`Database connection failed: ${error}`);

    await dbClient.end();
    process.exit(1);
  }
};

export default startServer;
