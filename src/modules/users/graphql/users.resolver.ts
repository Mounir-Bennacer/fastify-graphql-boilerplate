export const userResolver = {
  Query: {
    async users(_, args, ctx) {
      console.log({ endpoint: "users" });
    },
    async getUserById(_, { id }, ctx) {
      console.log({ endpoint: "getUserById" });
    },
  },
  Mutation: {
    async createUser(_, { inputs }, ctx) {
      console.log({ inputs });
    },
    async updateUser(_, { id, inputs }, ctx) {
      console.log({ endpoint: "CREATE", id, inputs });
    },
    async deleteUser(_, { id }) {
      console.log({ endpoint: "DELETE", id });
    },
  },
};
