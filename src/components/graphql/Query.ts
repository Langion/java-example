/* tslint:disable */

import * as graphql from "graphql";
import * as ServiceaGraphql from "./Servicea";
import * as ServicebGraphql from "./Serviceb";

export class Query {
  public create() {
    return {
      Servicea: {
        type: new graphql.GraphQLObjectType({
          name: "Servicea",
          fields: {
            Hotel: { type: ServiceaGraphql.Hotel, resolve: () => ({}) },
            TestA: { type: ServiceaGraphql.TestA, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
      Serviceb: {
        type: new graphql.GraphQLObjectType({
          name: "Serviceb",
          fields: {
            Hotel: { type: ServicebGraphql.Hotel, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
    };
  }
}
