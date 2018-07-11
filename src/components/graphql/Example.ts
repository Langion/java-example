/* tslint:disable */

import * as graphql from "graphql";
import * as ExampleApi from "../api/Example";
import * as CommonGql from "../gql/Common";
import * as ExampleGql from "../gql/Example";

export namespace HotelInterplay {
  export const UpdateHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function UpdateHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function UpdateHotelParams(isInput: false): graphql.GraphQLObjectType;
    function UpdateHotelParams(isInput: any) {
      let name = isInput ? `UpdateHotelParamsInput` : `UpdateHotelParams`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          fields: () => ({
            id: {
              type: new graphql.GraphQLNonNull(graphql.GraphQLFloat),
              description: `The ID of the existing hotel resource.`,
            },
          }),
        } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

        cache[name] = isInput
          ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
          : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
      }
      return cache[name];
    }

    return UpdateHotelParams;
  })();

  export const DeleteHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function DeleteHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function DeleteHotelParams(isInput: false): graphql.GraphQLObjectType;
    function DeleteHotelParams(isInput: any) {
      let name = isInput ? `DeleteHotelParamsInput` : `DeleteHotelParams`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          fields: () => ({
            id: {
              type: new graphql.GraphQLNonNull(graphql.GraphQLFloat),
              description: `The ID of the existing hotel resource.`,
            },
          }),
        } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

        cache[name] = isInput
          ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
          : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
      }
      return cache[name];
    }

    return DeleteHotelParams;
  })();

  export const GetHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetHotelParams(isInput: false): graphql.GraphQLObjectType;
    function GetHotelParams(isInput: any) {
      let name = isInput ? `GetHotelParamsInput` : `GetHotelParams`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          fields: () => ({
            id: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat), description: `The ID of the hotel.` },
          }),
        } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

        cache[name] = isInput
          ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
          : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
      }
      return cache[name];
    }

    return GetHotelParams;
  })();

  export const GetAllHotelQuery = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetAllHotelQuery(isInput: true): graphql.GraphQLInputObjectType;
    function GetAllHotelQuery(isInput: false): graphql.GraphQLObjectType;
    function GetAllHotelQuery(isInput: any) {
      let name = isInput ? `GetAllHotelQueryInput` : `GetAllHotelQuery`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          fields: () => ({
            size: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat), description: `Tha page size` },
            page: {
              type: new graphql.GraphQLNonNull(graphql.GraphQLFloat),
              description: `The page number (zero-based)`,
            },
          }),
        } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

        cache[name] = isInput
          ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
          : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
      }
      return cache[name];
    }

    return GetAllHotelQuery;
  })();
}

export const Hotel = new graphql.GraphQLObjectType({
  name: "HotelExampleExample",
  fields: {
    getAllHotel: {
      description: `Path: /example/v1/hotels/\nGet a paginated list of all hotels.The list is paginated. You can provide a page number (default 0) and a page size (default 100)`,
      type: CommonGql.Page(false, ExampleGql.Hotel(false)),
      args: {
        query: { type: HotelInterplay.GetAllHotelQuery(true) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ExampleApi.Hotel.getAllHotel(args, { source, info, origin: "example", ...c }),
    },
    getHotel: {
      description: `Path: /example/v1/hotels/{id}\nGet a single hotel.You have to provide a valid hotel ID.`,
      type: ExampleGql.Hotel(false),
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelInterplay.GetHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ExampleApi.Hotel.getHotel(args, { source, info, origin: "example", ...c }),
    },
  },
});

export namespace HotelMutationInterplay {
  export const UpdateHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function UpdateHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function UpdateHotelParams(isInput: false): graphql.GraphQLObjectType;
    function UpdateHotelParams(isInput: any) {
      let name = isInput
        ? `UpdateHotelParamsExampleHotelMutationInterplayInput`
        : `UpdateHotelParamsExampleHotelMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          fields: () => ({
            id: {
              type: new graphql.GraphQLNonNull(graphql.GraphQLFloat),
              description: `The ID of the existing hotel resource.`,
            },
          }),
        } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

        cache[name] = isInput
          ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
          : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
      }
      return cache[name];
    }

    return UpdateHotelParams;
  })();

  export const DeleteHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function DeleteHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function DeleteHotelParams(isInput: false): graphql.GraphQLObjectType;
    function DeleteHotelParams(isInput: any) {
      let name = isInput
        ? `DeleteHotelParamsExampleHotelMutationInterplayInput`
        : `DeleteHotelParamsExampleHotelMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          fields: () => ({
            id: {
              type: new graphql.GraphQLNonNull(graphql.GraphQLFloat),
              description: `The ID of the existing hotel resource.`,
            },
          }),
        } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

        cache[name] = isInput
          ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
          : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
      }
      return cache[name];
    }

    return DeleteHotelParams;
  })();

  export const GetHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetHotelParams(isInput: false): graphql.GraphQLObjectType;
    function GetHotelParams(isInput: any) {
      let name = isInput
        ? `GetHotelParamsExampleHotelMutationInterplayInput`
        : `GetHotelParamsExampleHotelMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          fields: () => ({
            id: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat), description: `The ID of the hotel.` },
          }),
        } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

        cache[name] = isInput
          ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
          : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
      }
      return cache[name];
    }

    return GetHotelParams;
  })();

  export const GetAllHotelQuery = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetAllHotelQuery(isInput: true): graphql.GraphQLInputObjectType;
    function GetAllHotelQuery(isInput: false): graphql.GraphQLObjectType;
    function GetAllHotelQuery(isInput: any) {
      let name = isInput
        ? `GetAllHotelQueryExampleHotelMutationInterplayInput`
        : `GetAllHotelQueryExampleHotelMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          fields: () => ({
            size: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat), description: `Tha page size` },
            page: {
              type: new graphql.GraphQLNonNull(graphql.GraphQLFloat),
              description: `The page number (zero-based)`,
            },
          }),
        } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

        cache[name] = isInput
          ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
          : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
      }
      return cache[name];
    }

    return GetAllHotelQuery;
  })();
}

export const HotelMutation = new graphql.GraphQLObjectType({
  name: "HotelMutationExample",
  fields: {
    createHotel: {
      description: `Path: /example/v1/hotels/\nCreate a hotel resource.Returns the URL of the new resource in the Location header.`,
      type: CommonGql.Any,
      args: {
        payload: { type: new graphql.GraphQLNonNull(ExampleGql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ExampleApi.Hotel.createHotel(args, { source, info, origin: "example", ...c }),
    },
    deleteHotel: {
      description: `Path: /example/v1/hotels/{id}\nDelete a hotel resource.You have to provide a valid hotel ID in the URL. Once deleted the resource can not be recovered.`,
      type: CommonGql.Any,
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelMutationInterplay.DeleteHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ExampleApi.Hotel.deleteHotel(args, { source, info, origin: "example", ...c }),
    },
    updateHotel: {
      description: `Path: /example/v1/hotels/{id}\nUpdate a hotel resource.You have to provide a valid hotel ID in the URL and in the payload. The ID attribute can not be updated.`,
      type: CommonGql.Any,
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelMutationInterplay.UpdateHotelParams(true)) },
        payload: { type: new graphql.GraphQLNonNull(ExampleGql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ExampleApi.Hotel.updateHotel(args, { source, info, origin: "example", ...c }),
    },
  },
});
