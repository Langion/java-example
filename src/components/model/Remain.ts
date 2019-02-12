/* tslint:disable */

/**
 * @addedFrom servicea
 */
export interface Order {
  ascending?: boolean;
  descending?: boolean;
  direction?: Direction;
  ignoreCase?: boolean;
  nullHandling?: NullHandling;
  property?: string;
}

/**
 * @addedFrom servicea
 */
export interface Page<T = void> extends Slice<T> {
  totalElements?: number;
  totalPages?: number;
}

/**
 * @addedFrom servicea
 */
export interface Pageable {
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  sort?: Sort;
}

/**
 * @addedFrom servicea
 */
export interface Slice<T = void> {
  content?: T[];
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort;
}

/**
 * @addedFrom servicea
 */
export interface Sort {
  DEFAULT_DIRECTION?: Direction;
  orderFor?: Order;
}

/**
 * @addedFrom servicea
 */
export enum DirectionEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export type Direction = "ASC" | "DESC";

/**
 * @addedFrom servicea
 */
export enum NullHandlingEnum {
  NATIVE = "NATIVE",
  NULLS_FIRST = "NULLS_FIRST",
  NULLS_LAST = "NULLS_LAST",
}

export type NullHandling = "NATIVE" | "NULLS_FIRST" | "NULLS_LAST";
