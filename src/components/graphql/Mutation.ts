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
            HotelControllerMutation: { type: ServiceaGraphql.HotelControllerMutation, resolve: () => ({}) },
            TestAControllerMutation: { type: ServiceaGraphql.TestAControllerMutation, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
      ServicebMutation: {
        type: new graphql.GraphQLObjectType({
          name: "ServicebMutation",
          fields: {
            HotelControllerMutation: { type: ServicebGraphql.HotelControllerMutation, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
    };
  }
}
