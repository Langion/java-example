/* tslint:disable */

import * as graphql from "graphql";
import * as CommonGql from "./Common";
import * as SharedGql from "./Shared";
export const HotelTwo = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function HotelTwo(isInput: true): graphql.GraphQLInputObjectType;
  function HotelTwo(isInput: false): graphql.GraphQLObjectType;
  function HotelTwo(isInput: any) {
    let name = isInput ? `HotelTwoInput` : `HotelTwo`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: `a simple domain entity doubling as a DTO`,
        fields: () => ({
          one: { type: SharedGql.Hotel(isInput), description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return HotelTwo;
})();
