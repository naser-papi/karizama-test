import { createSlice } from "@reduxjs/toolkit";
import {
  IGeneralState,
  IAction,
  UserType,
  ProductType,
  SelectedItemType
} from "../models/GeneralTypes";

const initialState: IGeneralState = {
  mode: "light",
  products: [],
  users: [],
  selectedItems: []
};

const generalSlice = createSlice<IGeneralState>({
  name: "general",
  initialState: initialState,
  reducers: {
    toggleMode: (state: IGeneralState, action: IAction<string>) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    setUsers: (state: IGeneralState, action: IAction<UserType[]>) => {
      state.users = action.payload;
    },
    setProducts: (state: IGeneralState, action: IAction<ProductType[]>) => {
      state.products = action.payload;
    },
    toggleSelected: (state: IGeneralState, action: IAction<SelectedItemType>) => {
      const exist = state.selectedItems.find(
        (x) => x.id === action.payload.id && x.type === action.payload.type
      );
      if (exist) {
        state.selectedItems = state.selectedItems.filter((x) => x.autoKey != exist.autoKey);
      } else {
        state.selectedItems.push({
          ...action.payload,
          autoKey: `${action.payload.type}-${action.payload.id}`
        });
      }
    }
  }
});

export const { toggleMode, setUsers, setProducts, toggleSelected } = generalSlice.actions;

export default generalSlice.reducer;
