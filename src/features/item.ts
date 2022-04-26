import { ItemModel } from "../model";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ItemModel[] = [];

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    add: (state: ItemModel[], { payload }: PayloadAction<ItemModel>) => {
      console.log(payload);
      return state = [...state, payload];
    }
  }
})

export const { add } = itemSlice.actions;


export default itemSlice.reducer;