/* tslint:disable */

export * from "./Common";

/**
 * a simple domain entity doubling as a DTO
 */
export interface Hotel {
  city: string;
  name: string;
  rating: number;
  description: string;
  id: number;
}
