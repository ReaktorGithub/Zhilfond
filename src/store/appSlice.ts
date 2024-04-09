import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppInitialState, IUser} from "./types";

export const initialState: IAppInitialState = {
  loading: false,
  search: '',
  searchParsed: [],
  users: [],
  selectedUserId: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
    setSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    setSearchParsed(state, { payload }: PayloadAction<string[]>) {
      state.searchParsed = payload;
    },
    setUsers(state, { payload }: PayloadAction<IUser[]>) {
      state.users = payload;
    },
    setSelectedUserId(state, { payload }: PayloadAction<string | null>) {
      state.selectedUserId = payload;
    },
  },
});

export const {
  setLoading,
  setSearch,
  setSearchParsed,
  setUsers,
  setSelectedUserId,
} = appSlice.actions;

export default appSlice.reducer;
