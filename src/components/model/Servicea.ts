/* tslint:disable */

export * from "./Shared";

export * from "./Common";

/**
 * a simple domain entity doubling as a DTO
 */
export interface TestAHotel {
  test: string;
  city: string;
  name?: string;
  rating: number;
  description: string;
  id?: number;
}
