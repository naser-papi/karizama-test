import { ReactNode } from "react";

export enum PageRoutes {
  Home = "/home",
  ROOT = "/"
}

export type EntityType = "User" | "Product";
//export type FullNameType = {firstname:string,lastname:string}
export type UserType = {
  id: number;
  usename: string;
  email: string;
  icon?: string;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  icon?: string;
};

export interface IList {
  children: ReactNode[];
  title: string;
  filterHandler?: (string) => void;
}

export type SelectedItemType = {
  id: number;
  type: EntityType;
  autoKey: string;
};

export interface IGeneralState {
  mode: "light" | "dark";
  users: UserType[];
  products: ProductType[];
  selectedItems: SelectedItemType[];
}

export interface IAppState {
  general: IGeneralState;
}

export interface IAction<T> {
  name: string;
  payload: T;
}
