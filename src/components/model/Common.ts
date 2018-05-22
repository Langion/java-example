/* tslint:disable */

export const enum Direction {
  ASC = "ASC",
  DESC = "DESC",
}

export const enum NullHandling {
  NATIVE = "NATIVE",
  NULLS_FIRST = "NULLS_FIRST",
  NULLS_LAST = "NULLS_LAST",
}

export interface Order {
  serialVersionUID: number;
  nullHandling: NullHandling;
  ignoreCase: boolean;
  property: string;
  DEFAULT_IGNORE_CASE: boolean;
  direction: Direction;
  descending: boolean;
  ascending: boolean;
}

export interface Page<T = void> extends Slice<T> {
  totalElements: number;
  totalPages: number;
}

export interface Slice<T = void> {
  last: boolean;
  content: T[];
  number: number;
  sort: Sort;
  first: boolean;
  size: number;
  numberOfElements: number;
}

export interface Sort {
  DEFAULT_DIRECTION: Direction;
  serialVersionUID: number;
  orders: Order[];
  orderFor: Order;
}