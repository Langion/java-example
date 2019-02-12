/* tslint:disable */

import { api } from "../../core/api";
import * as RemainModel from "../model/Remain";
import * as ServicebModel from "../model/Serviceb";

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

  export interface GetHotelTwoParams {
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
    .request<void, void, ServicebModel.Hotel>("post")
    .build();

  export const deleteHotel = api
    .path((p: DeleteHotelParams) => `/example/v1/hotels/${p.id}`)
    .request<void, void, void>("delete")
    .build();

  export const getAllHotel = api
    .path("/example/v1/hotels/")
    .request<RemainModel.Page<ServicebModel.Hotel>, GetAllHotelQuery, void>("get")
    .build();

  export const getHotel = api
    .path((p: GetHotelParams) => `/example/v1/hotels/${p.id}`)
    .request<ServicebModel.Hotel, void, void>("get")
    .build();

  export const getHotelTwo = api
    .path((p: GetHotelTwoParams) => `/example/v1/hotels/two/${p.id}`)
    .request<ServicebModel.HotelTwo, void, void>("get")
    .build();

  export const updateHotel = api
    .path((p: UpdateHotelParams) => `/example/v1/hotels/${p.id}`)
    .request<void, void, ServicebModel.Hotel>("put")
    .build();
}
