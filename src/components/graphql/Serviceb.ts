/* tslint:disable */

import * as graphql from "graphql";
import * as ServicebApi from "../api/Serviceb";
import * as CommonGql from "../gql/Common";
import * as ServicebGql from "../gql/Serviceb";
import * as SharedGql from "../gql/Shared";

export namespace HotelInterplay {
  export const UpdateHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function UpdateHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function UpdateHotelParams(isInput: false): graphql.GraphQLObjectType;
    function UpdateHotelParams(isInput: any) {
      let name = isInput ? `UpdateHotelParamsServicebHotelInterplayInput` : `UpdateHotelParamsServicebHotelInterplay`;

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

  export const GetHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetHotelParams(isInput: false): graphql.GraphQLObjectType;
    function GetHotelParams(isInput: any) {
      let name = isInput ? `GetHotelParamsServicebHotelInterplayInput` : `GetHotelParamsServicebHotelInterplay`;

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

  export const GetHotelTwoParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetHotelTwoParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetHotelTwoParams(isInput: false): graphql.GraphQLObjectType;
    function GetHotelTwoParams(isInput: any) {
      let name = isInput ? `GetHotelTwoParamsInput` : `GetHotelTwoParams`;

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

    return GetHotelTwoParams;
  })();

  export const DeleteHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function DeleteHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function DeleteHotelParams(isInput: false): graphql.GraphQLObjectType;
    function DeleteHotelParams(isInput: any) {
      let name = isInput ? `DeleteHotelParamsServicebHotelInterplayInput` : `DeleteHotelParamsServicebHotelInterplay`;

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

  export const GetAllHotelQuery = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetAllHotelQuery(isInput: true): graphql.GraphQLInputObjectType;
    function GetAllHotelQuery(isInput: false): graphql.GraphQLObjectType;
    function GetAllHotelQuery(isInput: any) {
      let name = isInput ? `GetAllHotelQueryServicebHotelInterplayInput` : `GetAllHotelQueryServicebHotelInterplay`;

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
  name: "HotelServiceb",
  fields: {
    getAllHotel: {
      description: `Path: /example/v1/hotels/\nGet a paginated list of all hotels.The list is paginated. You can provide a page number (default 0) and a page size (default 100)`,
      type: CommonGql.Page(false, SharedGql.Hotel(false)),
      args: {
        query: { type: HotelInterplay.GetAllHotelQuery(true) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServicebApi.Hotel.getAllHotel(args, { source, info, origin: "serviceb", ...c }),
    },
    getHotel: {
      description: `Path: /example/v1/hotels/{id}\nGet a single hotel.You have to provide a valid hotel ID.`,
      type: SharedGql.Hotel(false),
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelInterplay.GetHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServicebApi.Hotel.getHotel(args, { source, info, origin: "serviceb", ...c }),
    },
    getHotelTwo: {
      description: `Path: /example/v1/hotels/two/{id}\nGet a single hotel.You have to provide a valid hotel ID.`,
      type: ServicebGql.HotelTwo(false),
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelInterplay.GetHotelTwoParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServicebApi.Hotel.getHotelTwo(args, { source, info, origin: "serviceb", ...c }),
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
        ? `UpdateHotelParamsServicebHotelMutationInterplayInput`
        : `UpdateHotelParamsServicebHotelMutationInterplay`;

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

  export const GetHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetHotelParams(isInput: false): graphql.GraphQLObjectType;
    function GetHotelParams(isInput: any) {
      let name = isInput
        ? `GetHotelParamsServicebHotelMutationInterplayInput`
        : `GetHotelParamsServicebHotelMutationInterplay`;

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

  export const GetHotelTwoParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetHotelTwoParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetHotelTwoParams(isInput: false): graphql.GraphQLObjectType;
    function GetHotelTwoParams(isInput: any) {
      let name = isInput
        ? `GetHotelTwoParamsServicebHotelMutationInterplayInput`
        : `GetHotelTwoParamsServicebHotelMutationInterplay`;

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

    return GetHotelTwoParams;
  })();

  export const DeleteHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function DeleteHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function DeleteHotelParams(isInput: false): graphql.GraphQLObjectType;
    function DeleteHotelParams(isInput: any) {
      let name = isInput
        ? `DeleteHotelParamsServicebHotelMutationInterplayInput`
        : `DeleteHotelParamsServicebHotelMutationInterplay`;

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

  export const GetAllHotelQuery = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetAllHotelQuery(isInput: true): graphql.GraphQLInputObjectType;
    function GetAllHotelQuery(isInput: false): graphql.GraphQLObjectType;
    function GetAllHotelQuery(isInput: any) {
      let name = isInput
        ? `GetAllHotelQueryServicebHotelMutationInterplayInput`
        : `GetAllHotelQueryServicebHotelMutationInterplay`;

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
  name: "HotelMutationServiceb",
  fields: {
    createHotel: {
      description: `Path: /example/v1/hotels/\nCreate a hotel resource.Returns the URL of the new resource in the Location header.`,
      type: CommonGql.Any,
      args: {
        payload: { type: new graphql.GraphQLNonNull(SharedGql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServicebApi.Hotel.createHotel(args, { source, info, origin: "serviceb", ...c }),
    },
    deleteHotel: {
      description: `Path: /example/v1/hotels/{id}\nDelete a hotel resource.You have to provide a valid hotel ID in the URL. Once deleted the resource can not be recovered.`,
      type: CommonGql.Any,
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelMutationInterplay.DeleteHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServicebApi.Hotel.deleteHotel(args, { source, info, origin: "serviceb", ...c }),
    },
    updateHotel: {
      description: `Path: /example/v1/hotels/{id}\nUpdate a hotel resource.You have to provide a valid hotel ID in the URL and in the payload. The ID attribute can not be updated.`,
      type: CommonGql.Any,
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelMutationInterplay.UpdateHotelParams(true)) },
        payload: { type: new graphql.GraphQLNonNull(SharedGql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServicebApi.Hotel.updateHotel(args, { source, info, origin: "serviceb", ...c }),
    },
  },
});
