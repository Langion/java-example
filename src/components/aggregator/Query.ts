/* tslint:disable */

import { resolveType } from "@langion/prism/dist/utils/resolveType";
import * as graphql from "graphql";
import * as ServiceaAggregator from "./Servicea";
import * as ServicebAggregator from "./Serviceb";

export class Query {
  public create() {
    return {
      Servicea: {
        type: new graphql.GraphQLObjectType({
          name: "Servicea",
          fields: {
            HotelController: { type: ServiceaAggregator.HotelController, resolve: () => ({}) },
            TestAController: { type: ServiceaAggregator.TestAController, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
      Serviceb: {
        type: new graphql.GraphQLObjectType({
          name: "Serviceb",
          fields: {
            HotelController: { type: ServicebAggregator.HotelController, resolve: () => ({}) },
          },
        }),
        resolve: () => ({}),
      },
    };
  }
}
