import { Apira } from "@langion/apira";
import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import * as fs from "fs";
import * as graphql from "graphql";
import expressPlayground from "graphql-playground-middleware-express";
import { express as voyagerMiddleware } from "graphql-voyager/middleware";
import { Mutation } from "./components/graphql/Mutation";
import { Query } from "./components/graphql/Query";
import { api } from "./core/api";
import { ServiceRequest } from "./core/ServiceRequest";

Apira.setResolver(new ServiceRequest(), api);

const query = new Query();
const mutation = new Mutation();

const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: "Query",
        fields: query.create(),
    }),
    mutation: new graphql.GraphQLObjectType({
        name: "Mutation",
        fields: mutation.create(),
    }),
});

fs.writeFileSync("schema.graphql", graphql.printSchema(schema));
fs.writeFileSync(
    "schema.json",
    JSON.stringify(graphql.introspectionFromSchema(schema, { descriptions: true }), undefined, 4),
);

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
        context: {one: "one"},
    }),
);

app.use("/voyager", voyagerMiddleware({ endpointUrl: "/graphql" }));
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen(4000);
