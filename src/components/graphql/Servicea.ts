/* tslint:disable */

import { Raw } from "@langion/prism/dist/utils/raw";
import * as graphql from "graphql";

export const Hotel = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function Hotel(isInput: true): graphql.GraphQLInputObjectType;
  function Hotel(isInput: false): graphql.GraphQLObjectType;
  function Hotel(isInput: any) {
    let name = isInput ? `HotelInput` : `Hotel`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: ` a simple domain entity doubling as a DTO  `,
        interfaces: [],
        fields: () => ({
          raw: { type: Raw },
          city: { type: graphql.GraphQLString, description: `` },
          description: { type: graphql.GraphQLString, description: `` },
          id: { type: graphql.GraphQLFloat, description: `` },
          name: { type: graphql.GraphQLString, description: `` },
          rating: { type: graphql.GraphQLFloat, description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return Hotel;
})();

export const TestAHotel = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function TestAHotel(isInput: true): graphql.GraphQLInputObjectType;
  function TestAHotel(isInput: false): graphql.GraphQLObjectType;
  function TestAHotel(isInput: any) {
    let name = isInput ? `TestAHotelInput` : `TestAHotel`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: ` a simple domain entity doubling as a DTO  `,
        interfaces: [],
        fields: () => ({
          raw: { type: Raw },
          city: { type: graphql.GraphQLString, description: `` },
          description: { type: graphql.GraphQLString, description: `` },
          id: { type: graphql.GraphQLFloat, description: `` },
          name: { type: graphql.GraphQLString, description: `` },
          rating: { type: graphql.GraphQLFloat, description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return TestAHotel;
})();
