import { userService } from "../services/user";
import { saveAnalytics, toggleRequestAnalytics, getNotifications, toggleLoading, getNotificationsFailed, toggleNotificationUpdate, updateNotification, updateNotificationFailed } from "../slices/user";
import { toast } from "react-toastify";

const getDashboardAnalytics = (data) => {
  return (dispatch) => {
  dispatch(toggleRequestAnalytics(true));
  return userService.getAnalytics(data).then(
    (data) => {
      dispatch(saveAnalytics(data));
    },
    () => {
      dispatch(toggleRequestAnalytics(false));
    }
  );
  }
};
const getUserNotifications = (data, load) => {
  return (dispatch) => {
    if(!load) dispatch(toggleLoading(true));
  return userService.getNotifications(data).then(
    (data) => {
      dispatch(getNotifications(data));
    },
    (error) => {
      if(error.message){
        //toast.error(error.message);
      }
      dispatch(toggleLoading(false));
      dispatch(getNotificationsFailed());
    }
  );
  }
};
const updateUserNotifications = (payload) => {
  return (dispatch) => {
  dispatch(toggleNotificationUpdate());
  return userService.updateNotification(payload).then(
    (data) => {
      toast.success('Notification updated successfully!');
      dispatch(updateNotification(data));
    },
    (error) => {
      if(error.message){
        toast.error(error.message); 
      }
      dispatch(updateNotificationFailed(false));
    }
  );
  }
};
const userActions = {
  getDashboardAnalytics,
  getUserNotifications,
  updateUserNotifications
};
export default userActions;
