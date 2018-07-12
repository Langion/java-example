/* tslint:disable */

import * as graphql from "graphql";

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
        description: `a simple domain entity doubling as a DTO`,
        fields: () => ({
          test: { type: new graphql.GraphQLNonNull(graphql.GraphQLString), description: `` },
          city: { type: new graphql.GraphQLNonNull(graphql.GraphQLString), description: `` },
          name: { type: graphql.GraphQLString, description: `` },
          rating: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat), description: `` },
          description: { type: new graphql.GraphQLNonNull(graphql.GraphQLString), description: `` },
          id: { type: graphql.GraphQLFloat, description: `` },
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
