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
            HotelController: { type: ServiceaGraphql.HotelController, resolve: () => ({}) },
            TestAController: { type: ServiceaGraphql.TestAController, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
      Serviceb: {
        type: new graphql.GraphQLObjectType({
          name: "Serviceb",
          fields: {
            HotelController: { type: ServicebGraphql.HotelController, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
    };
  }
}
