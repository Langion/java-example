/* tslint:disable */

import { resolveType } from "@langion/prism/dist/utils/resolveType";
import * as graphql from "graphql";
import * as ServiceaAggregator from "./Servicea";
import * as ServicebAggregator from "./Serviceb";

export class Mutation {
  public create() {
    return {
      ServiceaMutation: {
        type: new graphql.GraphQLObjectType({
          name: "ServiceaMutation",
          fields: {
            HotelControllerMutation: { type: ServiceaAggregator.HotelControllerMutation, resolve: () => ({}) },
            TestAControllerMutation: { type: ServiceaAggregator.TestAControllerMutation, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
      ServicebMutation: {
        type: new graphql.GraphQLObjectType({
          name: "ServicebMutation",
          fields: {
            HotelControllerMutation: { type: ServicebAggregator.HotelControllerMutation, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
    };
  }
}
