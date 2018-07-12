/* tslint:disable */

import * as graphql from "graphql";
import * as ServiceaGraphql from "./Servicea";
import * as ServicebGraphql from "./Serviceb";

export class Mutation {
  public create() {
    return {
      ServiceaMutation: {
        type: new graphql.GraphQLObjectType({
          name: "ServiceaMutation",
          fields: {
            HotelMutation: { type: ServiceaGraphql.HotelMutation, resolve: () => ({}) },
            TestAMutation: { type: ServiceaGraphql.TestAMutation, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
      ServicebMutation: {
        type: new graphql.GraphQLObjectType({
          name: "ServicebMutation",
          fields: {
            HotelMutation: { type: ServicebGraphql.HotelMutation, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
    };
  }
}
