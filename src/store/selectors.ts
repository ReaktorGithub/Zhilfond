import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "./index";

export const userProfileSelector = createSelector(
  (state: RootState) => ({
    id: state.app.selectedUserId,
    users: state.app.users,
  }),
  (data) => {
    const { id, users } = data;
    return users.find((user) => user.id === id);
  }
);
