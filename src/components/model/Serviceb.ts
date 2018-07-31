/* tslint:disable */

export * from "./Common";
export * from "./Shared";
import * as SharedModel from "./Shared";

/**
 * a simple domain entity doubling as a DTO
 */
export interface HotelTwo {
  one?: SharedModel.Hotel;
}
