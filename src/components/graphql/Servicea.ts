/* tslint:disable */

import * as graphql from "graphql";
import * as ServiceaApi from "../api/Servicea";
import * as CommonGql from "../gql/Common";
import * as ServiceaGql from "../gql/Servicea";
import * as SharedGql from "../gql/Shared";

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
  name: "HotelServicea",
  fields: {
    getAllHotel: {
      description: `Path: /example/v1/hotels/\nGet a paginated list of all hotels.The list is paginated. You can provide a page number (default 0) and a page size (default 100)`,
      type: CommonGql.Page(false, SharedGql.Hotel(false)),
      args: {
        query: { type: HotelInterplay.GetAllHotelQuery(true) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.Hotel.getAllHotel(args, { source, info, origin: "servicea", ...c }),
    },
    getHotel: {
      description: `Path: /example/v1/hotels/{id}\nGet a single hotel.You have to provide a valid hotel ID.`,
      type: SharedGql.Hotel(false),
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelInterplay.GetHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.Hotel.getHotel(args, { source, info, origin: "servicea", ...c }),
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
        ? `UpdateHotelParamsServiceaHotelMutationInterplayInput`
        : `UpdateHotelParamsServiceaHotelMutationInterplay`;

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
        ? `GetHotelParamsServiceaHotelMutationInterplayInput`
        : `GetHotelParamsServiceaHotelMutationInterplay`;

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

  export const DeleteHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function DeleteHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function DeleteHotelParams(isInput: false): graphql.GraphQLObjectType;
    function DeleteHotelParams(isInput: any) {
      let name = isInput
        ? `DeleteHotelParamsServiceaHotelMutationInterplayInput`
        : `DeleteHotelParamsServiceaHotelMutationInterplay`;

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
        ? `GetAllHotelQueryServiceaHotelMutationInterplayInput`
        : `GetAllHotelQueryServiceaHotelMutationInterplay`;

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
  name: "HotelMutationServicea",
  fields: {
    createHotel: {
      description: `Path: /example/v1/hotels/\nCreate a hotel resource.Returns the URL of the new resource in the Location header.`,
      type: CommonGql.Any,
      args: {
        payload: { type: new graphql.GraphQLNonNull(SharedGql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.Hotel.createHotel(args, { source, info, origin: "servicea", ...c }),
    },
    deleteHotel: {
      description: `Path: /example/v1/hotels/{id}\nDelete a hotel resource.You have to provide a valid hotel ID in the URL. Once deleted the resource can not be recovered.`,
      type: CommonGql.Any,
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelMutationInterplay.DeleteHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.Hotel.deleteHotel(args, { source, info, origin: "servicea", ...c }),
    },
    updateHotel: {
      description: `Path: /example/v1/hotels/{id}\nUpdate a hotel resource.You have to provide a valid hotel ID in the URL and in the payload. The ID attribute can not be updated.`,
      type: CommonGql.Any,
      args: {
        params: { type: new graphql.GraphQLNonNull(HotelMutationInterplay.UpdateHotelParams(true)) },
        payload: { type: new graphql.GraphQLNonNull(SharedGql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.Hotel.updateHotel(args, { source, info, origin: "servicea", ...c }),
    },
  },
});

export namespace TestAInterplay {
  export const UpdateHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function UpdateHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function UpdateHotelParams(isInput: false): graphql.GraphQLObjectType;
    function UpdateHotelParams(isInput: any) {
      let name = isInput ? `UpdateHotelParamsServiceaTestAInterplayInput` : `UpdateHotelParamsServiceaTestAInterplay`;

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
      let name = isInput ? `GetHotelParamsServiceaTestAInterplayInput` : `GetHotelParamsServiceaTestAInterplay`;

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

  export const DeleteHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function DeleteHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function DeleteHotelParams(isInput: false): graphql.GraphQLObjectType;
    function DeleteHotelParams(isInput: any) {
      let name = isInput ? `DeleteHotelParamsServiceaTestAInterplayInput` : `DeleteHotelParamsServiceaTestAInterplay`;

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
      let name = isInput ? `GetAllHotelQueryServiceaTestAInterplayInput` : `GetAllHotelQueryServiceaTestAInterplay`;

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

    return GetTestHotelParams;
  })();
}

export const TestA = new graphql.GraphQLObjectType({
  name: "TestAServicea",
  fields: {
    getAllHotel: {
      description: `Path: /example/v1/a/test/\nGet a paginated list of all hotels.The list is paginated. You can provide a page number (default 0) and a page size (default 100)`,
      type: CommonGql.Page(false, SharedGql.Hotel(false)),
      args: {
        query: { type: TestAInterplay.GetAllHotelQuery(true) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestA.getAllHotel(args, { source, info, origin: "servicea", ...c }),
    },
    getHotel: {
      description: `Path: /example/v1/a/test/{id}\nGet a single hotel.You have to provide a valid hotel ID.`,
      type: SharedGql.Hotel(false),
      args: {
        params: { type: new graphql.GraphQLNonNull(TestAInterplay.GetHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestA.getHotel(args, { source, info, origin: "servicea", ...c }),
    },
    getTestHotel: {
      description: `Path: /example/v1/a/test/test/{id}\nGet a single hotel.You have to provide a valid hotel ID.`,
      type: ServiceaGql.TestAHotel(false),
      args: {
        params: { type: new graphql.GraphQLNonNull(TestAInterplay.GetTestHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestA.getTestHotel(args, { source, info, origin: "servicea", ...c }),
    },
  },
});

export namespace TestAMutationInterplay {
  export const UpdateHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function UpdateHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function UpdateHotelParams(isInput: false): graphql.GraphQLObjectType;
    function UpdateHotelParams(isInput: any) {
      let name = isInput
        ? `UpdateHotelParamsServiceaTestAMutationInterplayInput`
        : `UpdateHotelParamsServiceaTestAMutationInterplay`;

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
        ? `GetHotelParamsServiceaTestAMutationInterplayInput`
        : `GetHotelParamsServiceaTestAMutationInterplay`;

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

  export const DeleteHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function DeleteHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function DeleteHotelParams(isInput: false): graphql.GraphQLObjectType;
    function DeleteHotelParams(isInput: any) {
      let name = isInput
        ? `DeleteHotelParamsServiceaTestAMutationInterplayInput`
        : `DeleteHotelParamsServiceaTestAMutationInterplay`;

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
        ? `GetAllHotelQueryServiceaTestAMutationInterplayInput`
        : `GetAllHotelQueryServiceaTestAMutationInterplay`;

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

  export const GetTestHotelParams = (() => {
    const cache: Record<string, graphql.GraphQLObjectType | graphql.GraphQLInputObjectType> = {};

    function GetTestHotelParams(isInput: true): graphql.GraphQLInputObjectType;
    function GetTestHotelParams(isInput: false): graphql.GraphQLObjectType;
    function GetTestHotelParams(isInput: any) {
      let name = isInput
        ? `GetTestHotelParamsServiceaTestAMutationInterplayInput`
        : `GetTestHotelParamsServiceaTestAMutationInterplay`;

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

    return GetTestHotelParams;
  })();
}

export const TestAMutation = new graphql.GraphQLObjectType({
  name: "TestAMutationServicea",
  fields: {
    createHotel: {
      description: `Path: /example/v1/a/test/\nCreate a hotel resource.Returns the URL of the new resource in the Location header.`,
      type: CommonGql.Any,
      args: {
        payload: { type: new graphql.GraphQLNonNull(SharedGql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestA.createHotel(args, { source, info, origin: "servicea", ...c }),
    },
    deleteHotel: {
      description: `Path: /example/v1/a/test/{id}\nDelete a hotel resource.You have to provide a valid hotel ID in the URL. Once deleted the resource can not be recovered.`,
      type: CommonGql.Any,
      args: {
        params: { type: new graphql.GraphQLNonNull(TestAMutationInterplay.DeleteHotelParams(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestA.deleteHotel(args, { source, info, origin: "servicea", ...c }),
    },
    updateHotel: {
      description: `Path: /example/v1/a/test/{id}\nUpdate a hotel resource.You have to provide a valid hotel ID in the URL and in the payload. The ID attribute can not be updated.`,
      type: CommonGql.Any,
      args: {
        params: { type: new graphql.GraphQLNonNull(TestAMutationInterplay.UpdateHotelParams(true)) },
        payload: { type: new graphql.GraphQLNonNull(SharedGql.Hotel(true)) },
      },
      resolve: (source: any, args: any, c: any, info: any) =>
        ServiceaApi.TestA.updateHotel(args, { source, info, origin: "servicea", ...c }),
    },
  },
});
