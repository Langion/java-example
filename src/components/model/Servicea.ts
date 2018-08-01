/* tslint:disable */

export * from "./Shared";

/**
 * a simple domain entity doubling as a DTO
 */
export interface TestAHotel {
  city?: string;
  description?: string;
  id?: number;
  name?: string;
  rating?: number;
}
