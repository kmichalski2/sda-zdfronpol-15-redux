import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
type NotificationType = "success" | "info" | "warning" | "error";

export interface NotificationModel {
  id: number;
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
    addNotification: (
      state,
      action: PayloadAction<{ type: NotificationType; message: string }>
    ) => {
      const id = Date.now();
      const notification: NotificationModel = {
        id: id,
        type: action.payload.type,
        message: action.payload.message,
      };

      state.notifications.push(notification);
    },
    removeNotification: (state, action: PayloadAction<{ id: number }>) => {
      state.notifications = state.notifications.filter(
        (notificaton) => notificaton.id !== action.payload.id
      );
    },
  },
});

export const { addNotification, removeNotification } =
  notificationsSlice.actions;

export const selectNotifications = (rootState: RootState) =>
  rootState.notifications.notifications;

export const selectLast3Notifications = (rootState: RootState) =>
  rootState.notifications.notifications.slice(-3).sort((a, b) => b.id - a.id);

export const notificationsReducer = notificationsSlice.reducer;
