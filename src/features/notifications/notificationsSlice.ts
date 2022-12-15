import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
type NotificationType = "success" | "info" | "warning" | "error";

export interface NotificationModel {
  type: NotificationType;
  message: string;
}

export interface NotificationState {
  notifications: NotificationModel[];
}

export const initialState: NotificationState = {
  notifications: [],
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<NotificationModel>) => {
      const notification = action.payload;
      const id = Date.now();

      state.notifications.push(notification);
    },
  },
});

export const selectNotifications = (rootState: RootState) =>
  rootState.notifications.notifications;

export const notificationsReducer = notificationsSlice.reducer;
