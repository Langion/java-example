/* tslint:disable */

import { api } from "../../core/api";
import * as RemainModel from "../model/Remain";
import * as ServiceaModel from "../model/Servicea";

export namespace HotelController {
  export interface DeleteHotelParams {
    /**
     * The ID of the existing hotel resource.
     */
    id: number;
  }

  export interface GetAllHotelQuery {
    /**
     * Tha page size
     */
    size?: number;

    /**
     * The page number (zero-based)
     */
    page?: number;
  }

  export interface GetHotelParams {
    /**
     * The ID of the hotel.
     */
    id: number;
  }

  export interface UpdateHotelParams {
    /**
     * The ID of the existing hotel resource.
     */
    id: number;
  }

  export const createHotel = api
    .path("/example/v1/hotels/")
    .request<void, void, ServiceaModel.Hotel>("post")
    .build();

  export const deleteHotel = api
    .path((p: DeleteHotelParams) => `/example/v1/hotels/${p.id}`)
    .request<void, void, void>("delete")
    .build();

  export const getAllHotel = api
    .path("/example/v1/hotels/")
    .request<RemainModel.Page<ServiceaModel.Hotel>, GetAllHotelQuery, void>("get")
    .build();

  export const getHotel = api
    .path((p: GetHotelParams) => `/example/v1/hotels/${p.id}`)
    .request<ServiceaModel.Hotel, void, void>("get")
    .build();

  export const updateHotel = api
    .path((p: UpdateHotelParams) => `/example/v1/hotels/${p.id}`)
    .request<void, void, ServiceaModel.Hotel>("put")
    .build();
}

export namespace TestAController {
  export interface DeleteHotelParams {
    /**
     * The ID of the existing hotel resource.
     */
    id: number;
  }

  export interface GetAllHotelQuery {
    /**
     * Tha page size
     */
    size?: number;

    /**
     * The page number (zero-based)
     */
    page?: number;
  }

  export interface GetHotelParams {
    /**
     * The ID of the hotel.
     */
    id: number;
  }

  export interface GetTestHotelParams {
    /**
     * The ID of the hotel.
     */
    id: number;
  }

  export interface UpdateHotel2Params {
    /**
     * Some one
     */
    one: number;

    /**
     * The ID of the existing hotel resource.
     */
    id: number;
  }

  export interface UpdateHotelParams {
    /**
     * The ID of the existing hotel resource.
     */
    id: number;
  }

  export const createHotel = api
    .path("/example/v1/a/test/")
    .request<void, void, ServiceaModel.Hotel>("post")
    .build();

  export const deleteHotel = api
    .path((p: DeleteHotelParams) => `/example/v1/a/test/${p.id}`)
    .request<void, void, void>("delete")
    .build();

  export const getAllHotel = api
    .path("/example/v1/a/test/")
    .request<RemainModel.Page<ServiceaModel.Hotel>, GetAllHotelQuery, void>("get")
    .build();

  export const getHotel = api
    .path((p: GetHotelParams) => `/example/v1/a/test/${p.id}`)
    .request<ServiceaModel.Hotel, void, void>("get")
    .build();

  export const getTestHotel = api
    .path((p: GetTestHotelParams) => `/example/v1/a/test/test/${p.id}`)
    .request<ServiceaModel.TestAHotel, void, void>("get")
    .build();

  export const updateHotel = api
    .path((p: UpdateHotelParams) => `/example/v1/a/test/${p.id}`)
    .request<void, void, ServiceaModel.Hotel>("put")
    .build();

  export const updateHotel2 = api
    .path((p: UpdateHotel2Params) => `/example/v1/a/test/${p.id}/${p.one}`)
    .request<void, void, ServiceaModel.Hotel>("put")
    .build();
}
