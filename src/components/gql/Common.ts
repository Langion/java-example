/* tslint:disable */

import * as graphql from "graphql";
export const Order = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function Order(isInput: true): graphql.GraphQLInputObjectType;
  function Order(isInput: false): graphql.GraphQLObjectType;
  function Order(isInput: any) {
    let name = isInput ? `OrderInput` : `Order`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: ``,
        fields: () => ({
          ascending: { type: graphql.GraphQLBoolean, description: `` },
          descending: { type: graphql.GraphQLBoolean, description: `` },
          direction: { type: Direction, description: `` },
          ignoreCase: { type: graphql.GraphQLBoolean, description: `` },
          nullHandling: { type: NullHandling, description: `` },
          property: { type: graphql.GraphQLString, description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return Order;
})();

export const Page = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function Page(
    isInput: true,
    T?: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null,
  ): graphql.GraphQLInputObjectType;
  function Page(
    isInput: false,
    T?: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null,
  ): graphql.GraphQLObjectType;
  function Page(isInput: any, T: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null = Any) {
    let name = isInput ? `Page_${T}Input` : `Page_${T}`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: ``,
        fields: () => ({
          ...(function() {
            const fields = Slice(isInput, T!).getFields();
            const result: any = {};
            Object.keys(fields).forEach(
              (k) => (result[k] = { type: fields[k].type, description: fields[k].description }),
            );
            return result;
          })(),
          totalElements: { type: graphql.GraphQLFloat, description: `` },
          totalPages: { type: graphql.GraphQLFloat, description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return Page;
})();

export const Pageable = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function Pageable(isInput: true): graphql.GraphQLInputObjectType;
  function Pageable(isInput: false): graphql.GraphQLObjectType;
  function Pageable(isInput: any) {
    let name = isInput ? `PageableInput` : `Pageable`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: ``,
        fields: () => ({
          offset: { type: graphql.GraphQLFloat, description: `` },
          pageNumber: { type: graphql.GraphQLFloat, description: `` },
          pageSize: { type: graphql.GraphQLFloat, description: `` },
          sort: { type: Sort(isInput), description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return Pageable;
})();

export const Slice = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function Slice(
    isInput: true,
    T?: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null,
  ): graphql.GraphQLInputObjectType;
  function Slice(
    isInput: false,
    T?: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null,
  ): graphql.GraphQLObjectType;
  function Slice(isInput: any, T: graphql.GraphQLOutputType | graphql.GraphQLInputObjectType | null = Any) {
    let name = isInput ? `Slice_${T}Input` : `Slice_${T}`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: ``,
        fields: () => ({
          content: { type: new graphql.GraphQLList(T!), description: `` },
          first: { type: graphql.GraphQLBoolean, description: `` },
          last: { type: graphql.GraphQLBoolean, description: `` },
          number: { type: graphql.GraphQLFloat, description: `` },
          numberOfElements: { type: graphql.GraphQLFloat, description: `` },
          size: { type: graphql.GraphQLFloat, description: `` },
          sort: { type: Sort(isInput), description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return Slice;
})();

export const Sort = (() => {
  const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

  function Sort(isInput: true): graphql.GraphQLInputObjectType;
  function Sort(isInput: false): graphql.GraphQLObjectType;
  function Sort(isInput: any) {
    let name = isInput ? `SortInput` : `Sort`;

    name = name.replace(/[\[\]]/g, "");

    if (!cache[name]) {
      const c = {
        name,
        description: ``,
        fields: () => ({
          DEFAULT_DIRECTION: { type: Direction, description: `` },
          orderFor: { type: Order(isInput), description: `` },
        }),
      } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

      cache[name] = isInput
        ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
        : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
    }
    return cache[name];
  }

  return Sort;
})();

export const Direction = new graphql.GraphQLEnumType({
  name: "Direction",
  values: {
    ASC: { value: `ASC` },
    DESC: { value: `DESC` },
  },
});

export const NullHandling = new graphql.GraphQLEnumType({
  name: "NullHandling",
  values: {
    NATIVE: { value: `NATIVE` },
    NULLS_FIRST: { value: `NULLS_FIRST` },
    NULLS_LAST: { value: `NULLS_LAST` },
  },
});

export const Any = new graphql.GraphQLScalarType({
  name: "Any",
  description: "Любое значение которое не получилось сериализовать",
  serialize: (v) => v,
  parseValue: (v) => v,
  parseLiteral(ast) {
    switch (ast.kind) {
      case "BooleanValue":
        return ast.value;
      case "EnumValue":
        return ast.value;
      case "FloatValue":
        return ast.value;
      case "IntValue":
        return ast.value;
      case "ListValue":
        return ast.values;
      case "NullValue":
        return null;
      case "ObjectValue":
        return ast.fields;
      case "StringValue":
        return ast.value;
      case "Variable":
        return ast.name;
    }
  },
});
