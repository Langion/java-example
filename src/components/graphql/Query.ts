/* tslint:disable */

import * as graphql from "graphql";
import * as ExampleGraphql from "./Example";

export class Query {
  public create() {
    return {
      Example: {
        type: new graphql.GraphQLObjectType({
          name: "Example",
          fields: {
            Hotel: { type: ExampleGraphql.Hotel, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
    };
  }
}
