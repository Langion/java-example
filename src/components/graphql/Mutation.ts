/* tslint:disable */

import * as graphql from "graphql";
import * as ExampleGraphql from "./Example";

export class Mutation {
  public create() {
    return {
      ExampleMutation: {
        type: new graphql.GraphQLObjectType({
          name: "ExampleMutation",
          fields: {
            HotelMutation: { type: ExampleGraphql.HotelMutation, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
    };
  }
}
