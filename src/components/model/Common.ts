/* tslint:disable */

export interface Order {
  ascending?: boolean;
  descending?: boolean;
  direction?: Direction;
  ignoreCase?: boolean;
  nullHandling?: NullHandling;
  property?: string;
}

export interface Page<T = void> extends Slice<T> {
  totalElements?: number;
  totalPages?: number;
}

export interface Pageable {
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  sort?: Sort;
}

export interface Slice<T = void> {
  content?: T[];
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort;
}

export interface Sort {
  DEFAULT_DIRECTION?: Direction;
  orderFor?: Order;
}

export enum DirectionEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export type Direction = "ASC" | "DESC";

export enum NullHandlingEnum {
  NATIVE = "NATIVE",
  NULLS_FIRST = "NULLS_FIRST",
  NULLS_LAST = "NULLS_LAST",
}

export type NullHandling = "NATIVE" | "NULLS_FIRST" | "NULLS_LAST";
