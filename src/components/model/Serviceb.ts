/* tslint:disable */

import * as SharedModel from "./Shared";

export * from "./Shared";

export * from "./Common";

/**
 * a simple domain entity doubling as a DTO
 */
export interface HotelTwo {
  one?: SharedModel.Hotel;
}
