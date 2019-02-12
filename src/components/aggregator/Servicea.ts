/* tslint:disable */

import { Raw } from "@langion/prism/dist/utils/raw";
import { resolveType } from "@langion/prism/dist/utils/resolveType";
import * as graphql from "graphql";
import * as ServiceaApi from "../api/Servicea";
import * as RemainGraphql from "../graphql/Remain";
import * as ServiceaGraphql from "../graphql/Servicea";

export namespace HotelControllerInterplay {
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
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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
      let name = isInput ? `GetAllHotelQueryInput` : `GetAllHotelQuery`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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
}

export const HotelController = new graphql.GraphQLObjectType({
  name: "HotelControllerServicea",
  fields: {
    getAllHotel: {
      description: `Path: /example/v1/hotels/\nGet a paginated list of all hotels. The list is paginated. You can provide a page number (default 0) and a page size (default 100)`,
      type: RemainGraphql.Page(false, ServiceaGraphql.Hotel(false)),
      args: {
        query: { type: HotelControllerInterplay.GetAllHotelQuery(true) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.HotelController.getAllHotel(args, { source, info, origin: "servicea", ...c }),
    },
    getHotel: {
      description: `Path: /example/v1/hotels/{id}\nGet a single hotel. You have to provide a valid hotel ID.`,
      type: ServiceaGraphql.Hotel(false),
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelControllerInterplay.GetHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.HotelController.getHotel(args, { source, info, origin: "servicea", ...c }),
    },
  },
});

export namespace HotelControllerMutationInterplay {
  export const DeleteHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function DeleteHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function DeleteHotelParams(isInput: false): graphql.GraphQLObjectType;
    function DeleteHotelParams(isInput: any) {
      let name = isInput
        ? `DeleteHotelParamsServiceaHotelControllerMutationInterplayInput`
        : `DeleteHotelParamsServiceaHotelControllerMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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
        ? `GetAllHotelQueryServiceaHotelControllerMutationInterplayInput`
        : `GetAllHotelQueryServiceaHotelControllerMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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

  export const GetHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetHotelParams(isInput: false): graphql.GraphQLObjectType;
    function GetHotelParams(isInput: any) {
      let name = isInput
        ? `GetHotelParamsServiceaHotelControllerMutationInterplayInput`
        : `GetHotelParamsServiceaHotelControllerMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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

  export const UpdateHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function UpdateHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function UpdateHotelParams(isInput: false): graphql.GraphQLObjectType;
    function UpdateHotelParams(isInput: any) {
      let name = isInput
        ? `UpdateHotelParamsServiceaHotelControllerMutationInterplayInput`
        : `UpdateHotelParamsServiceaHotelControllerMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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
}

export const HotelControllerMutation = new graphql.GraphQLObjectType({
  name: "HotelControllerMutationServicea",
  fields: {
    createHotel: {
      description: `Path: /example/v1/hotels/\nCreate a hotel resource. Returns the URL of the new resource in the Location header.`,
      type: Raw,
      args: {
        payload: { type: new graphql.GraphQLNonNull(ServiceaGraphql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.HotelController.createHotel(args, { source, info, origin: "servicea", ...c }),
    },
    deleteHotel: {
      description: `Path: /example/v1/hotels/{id}\nDelete a hotel resource. You have to provide a valid hotel ID in the URL. Once deleted the resource can not be recovered.`,
      type: Raw,
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelControllerMutationInterplay.DeleteHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.HotelController.deleteHotel(args, { source, info, origin: "servicea", ...c }),
    },
    updateHotel: {
      description: `Path: /example/v1/hotels/{id}\nUpdate a hotel resource. You have to provide a valid hotel ID in the URL and in the payload. The ID attribute can not be updated.`,
      type: Raw,
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelControllerMutationInterplay.UpdateHotelParams(true)) },
        payload: { type: new graphql.GraphQLNonNull(ServiceaGraphql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.HotelController.updateHotel(args, { source, info, origin: "servicea", ...c }),
    },
  },
});

export namespace TestAControllerInterplay {
  export const DeleteHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function DeleteHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function DeleteHotelParams(isInput: false): graphql.GraphQLObjectType;
    function DeleteHotelParams(isInput: any) {
      let name = isInput
        ? `DeleteHotelParamsServiceaTestAControllerInterplayInput`
        : `DeleteHotelParamsServiceaTestAControllerInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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
        ? `GetAllHotelQueryServiceaTestAControllerInterplayInput`
        : `GetAllHotelQueryServiceaTestAControllerInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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

  export const GetHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetHotelParams(isInput: false): graphql.GraphQLObjectType;
    function GetHotelParams(isInput: any) {
      let name = isInput
        ? `GetHotelParamsServiceaTestAControllerInterplayInput`
        : `GetHotelParamsServiceaTestAControllerInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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

  export const GetTestHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetTestHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetTestHotelParams(isInput: false): graphql.GraphQLObjectType;
    function GetTestHotelParams(isInput: any) {
      let name = isInput ? `GetTestHotelParamsInput` : `GetTestHotelParams`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
            id: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat), description: `The ID of the hotel.` },
          }),
        } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

        cache[name] = isInput
          ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
          : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
      }
      return cache[name];
    }

    return GetTestHotelParams;
  })();

  export const UpdateHotel2Params = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function UpdateHotel2Params(isInput: true): graphql.GraphQLInputObjectType;
    function UpdateHotel2Params(isInput: false): graphql.GraphQLObjectType;
    function UpdateHotel2Params(isInput: any) {
      let name = isInput ? `UpdateHotel2ParamsInput` : `UpdateHotel2Params`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
            one: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat), description: `Some one` },
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

    return UpdateHotel2Params;
  })();

  export const UpdateHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function UpdateHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function UpdateHotelParams(isInput: false): graphql.GraphQLObjectType;
    function UpdateHotelParams(isInput: any) {
      let name = isInput
        ? `UpdateHotelParamsServiceaTestAControllerInterplayInput`
        : `UpdateHotelParamsServiceaTestAControllerInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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
}

export const TestAController = new graphql.GraphQLObjectType({
  name: "TestAControllerServicea",
  fields: {
    getAllHotel: {
      description: `Path: /example/v1/a/test/\nGet a paginated list of all hotels. The list is paginated. You can provide a page number (default 0) and a page size (default 100)`,
      type: RemainGraphql.Page(false, ServiceaGraphql.Hotel(false)),
      args: {
        query: { type: TestAControllerInterplay.GetAllHotelQuery(true) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestAController.getAllHotel(args, { source, info, origin: "servicea", ...c }),
    },
    getHotel: {
      description: `Path: /example/v1/a/test/{id}\nGet a single hotel. You have to provide a valid hotel ID.`,
      type: ServiceaGraphql.Hotel(false),
      args: {
        params: { type: new graphql.GraphQLNonNull(TestAControllerInterplay.GetHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestAController.getHotel(args, { source, info, origin: "servicea", ...c }),
    },
    getTestHotel: {
      description: `Path: /example/v1/a/test/test/{id}\nGet a single hotel. You have to provide a valid hotel ID.`,
      type: ServiceaGraphql.TestAHotel(false),
      args: {
        params: { type: new graphql.GraphQLNonNull(TestAControllerInterplay.GetTestHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestAController.getTestHotel(args, { source, info, origin: "servicea", ...c }),
    },
  },
});

export namespace TestAControllerMutationInterplay {
  export const DeleteHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function DeleteHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function DeleteHotelParams(isInput: false): graphql.GraphQLObjectType;
    function DeleteHotelParams(isInput: any) {
      let name = isInput
        ? `DeleteHotelParamsServiceaTestAControllerMutationInterplayInput`
        : `DeleteHotelParamsServiceaTestAControllerMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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
        ? `GetAllHotelQueryServiceaTestAControllerMutationInterplayInput`
        : `GetAllHotelQueryServiceaTestAControllerMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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

  export const GetHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetHotelParams(isInput: false): graphql.GraphQLObjectType;
    function GetHotelParams(isInput: any) {
      let name = isInput
        ? `GetHotelParamsServiceaTestAControllerMutationInterplayInput`
        : `GetHotelParamsServiceaTestAControllerMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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

  export const GetTestHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetTestHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetTestHotelParams(isInput: false): graphql.GraphQLObjectType;
    function GetTestHotelParams(isInput: any) {
      let name = isInput
        ? `GetTestHotelParamsServiceaTestAControllerMutationInterplayInput`
        : `GetTestHotelParamsServiceaTestAControllerMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
            id: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat), description: `The ID of the hotel.` },
          }),
        } as graphql.GraphQLObjectTypeConfig<any, any> | graphql.GraphQLInputObjectTypeConfig;

        cache[name] = isInput
          ? new graphql.GraphQLInputObjectType(c as graphql.GraphQLInputObjectTypeConfig)
          : new graphql.GraphQLObjectType(c as graphql.GraphQLObjectTypeConfig<any, any>);
      }
      return cache[name];
    }

    return GetTestHotelParams;
  })();

  export const UpdateHotel2Params = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function UpdateHotel2Params(isInput: true): graphql.GraphQLInputObjectType;
    function UpdateHotel2Params(isInput: false): graphql.GraphQLObjectType;
    function UpdateHotel2Params(isInput: any) {
      let name = isInput
        ? `UpdateHotel2ParamsServiceaTestAControllerMutationInterplayInput`
        : `UpdateHotel2ParamsServiceaTestAControllerMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
            one: { type: new graphql.GraphQLNonNull(graphql.GraphQLFloat), description: `Some one` },
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

    return UpdateHotel2Params;
  })();

  export const UpdateHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function UpdateHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function UpdateHotelParams(isInput: false): graphql.GraphQLObjectType;
    function UpdateHotelParams(isInput: any) {
      let name = isInput
        ? `UpdateHotelParamsServiceaTestAControllerMutationInterplayInput`
        : `UpdateHotelParamsServiceaTestAControllerMutationInterplay`;

      name = name.replace(/[\[\]]/g, "");

      if (!cache[name]) {
        const c = {
          name,
          description: ``,
          interfaces: [],
          fields: () => ({
            raw: { type: Raw },
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
}

export const TestAControllerMutation = new graphql.GraphQLObjectType({
  name: "TestAControllerMutationServicea",
  fields: {
    createHotel: {
      description: `Path: /example/v1/a/test/\nCreate a hotel resource. Returns the URL of the new resource in the Location header.`,
      type: Raw,
      args: {
        payload: { type: new graphql.GraphQLNonNull(ServiceaGraphql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestAController.createHotel(args, { source, info, origin: "servicea", ...c }),
    },
    deleteHotel: {
      description: `Path: /example/v1/a/test/{id}\nDelete a hotel resource. You have to provide a valid hotel ID in the URL. Once deleted the resource can not be recovered.`,
      type: Raw,
      args: {
        params: { type: new graphql.GraphQLNonNull(TestAControllerMutationInterplay.DeleteHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestAController.deleteHotel(args, { source, info, origin: "servicea", ...c }),
    },
    updateHotel: {
      description: `Path: /example/v1/a/test/{id}\nUpdate a hotel resource. You have to provide a valid hotel ID in the URL and in the payload. The ID attribute can not be updated.`,
      type: Raw,
      args: {
        params: { type: new graphql.GraphQLNonNull(TestAControllerMutationInterplay.UpdateHotelParams(true)) },
        payload: { type: new graphql.GraphQLNonNull(ServiceaGraphql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestAController.updateHotel(args, { source, info, origin: "servicea", ...c }),
    },
    updateHotel2: {
      description: `Path: /example/v1/a/test/{id}/{one}\nUpdate a hotel resource. You have to provide a valid hotel ID in the URL and in the payload. The ID attribute can not be updated.`,
      type: Raw,
      args: {
        params: { type: new graphql.GraphQLNonNull(TestAControllerMutationInterplay.UpdateHotel2Params(true)) },
        payload: { type: new graphql.GraphQLNonNull(ServiceaGraphql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestAController.updateHotel2(args, { source, info, origin: "servicea", ...c }),
    },
  },
});
