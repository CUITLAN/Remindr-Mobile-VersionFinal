import clienteAxios from '../config/axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import{
    GET_NOTIFICATION,
    NOTIFICATION_WORK,
    NOTIFICATION_WORK_SUCCESS,
    NOTIFICATION_WORK_FAILED,
    EXCLUDE_NOTIFICATION,
    EXCLUDE_NOTIFICATION_SUCCESS,
    EXCLUDE_NOTIFICATION_FAILED,
    INTEGRATE_NOTIFICATION,
    INTEGRATE_NOTIFICATION_SUCCESS,
    INTEGRATE_NOTIFICATION_FAILED
} from '../types';


export function getElementNotificationAction(selectedElement){
    return (dispatch) => {
        console.log(selectedElement);
        dispatch(getElementNotification(selectedElement));
    }
}

const getElementNotification = selectedElement =>({
    type: GET_NOTIFICATION,
    payload:selectedElement
})


export function setNotificationWorkAction(notification){
    return async (dispatch) => {
        dispatch(notificationWork());
        try {
            const id = notification.userId;
            const time = {notificationTime: notification.selectedNotificationTime};
            //Call the api to set the notification
            const response = await clienteAxios.post(`./save/notification/${id}`, time);
            console.log(response)
            if(response.data.message === 'Notification saved'){
                dispatch(notificationWorkSuccess(notification.selectedNotificationTime));
                const userData = JSON.parse(AsyncStorage.getItem('userData'));
                if(userData){
                    userData["notificationTime"] = notification.selectedNotificationTime;
                    localStorage.setItem('userData', JSON.stringify(userData));
                    return true;  
                } 
            }
        } catch (error) {
            console.log(error);
            if(error.response.data.error === 'Error saving notification'){
                dispatch(notificationWorkFailed(true));
                return error.response.data.error;
            }
            if(error.response.data.error === 'User not found'){
                dispatch(notificationWorkFailed(true));
                return error.response.data.error;
            }
            if(error.response.data.error === 'Campos incompletos'){
                dispatch(notificationWorkFailed(true));
                return error.response.data.error;
            }
        }
    }
}
//Set the state to loading
const notificationWork = () =>({
    type: NOTIFICATION_WORK,
    payload:true
})
//Set the state to not loading and save the notification
const notificationWorkSuccess = notification =>({
    type: NOTIFICATION_WORK_SUCCESS,
    payload:notification
})
// Set the state to not loading and set the error
const notificationWorkFailed = status =>({
    type: NOTIFICATION_WORK_FAILED,
    payload:status
})

export function excludeNotificationAction(data){
    return async (dispatch) => {
        dispatch(excludeNotification(true));
        try {
            const { userId, workId } = data;
            //Call the api to exclude the notification
            const response = await clienteAxios.patch(`./exclude/notification/${userId}/${workId}`);
            if(response.data.message === "Notification excluded"){
                dispatch(excludeNotificationSuccess());
                return true;
            }
        } catch (error) {
            console.log(error);
            if(error.response.data.error === 'Error excluding notification'){
                dispatch(excludeNotificationFailed(true));
                return false;
            }
        }
    }
}

const excludeNotification = () =>({
    type: EXCLUDE_NOTIFICATION,
    payload:true
})

const excludeNotificationSuccess = (notification) =>({
    type: EXCLUDE_NOTIFICATION_SUCCESS,
    payload:notification
})

const excludeNotificationFailed = (status, info) =>({
    type: EXCLUDE_NOTIFICATION_FAILED,
    payload:{
        status:status,
        info:info
    }
})

export function integrateNotificationAction(data){
    return async (dispatch) => {
        dispatch(integrateNotification());
        try {
            const { userId, workId } = data;
            //Call the api to exclude the notification
            const response = await clienteAxios.patch(`./integrate/notification/${userId}/${workId}`);
            if(response.data.message === "Notification integrated"){
                dispatch(integrateNotificationSuccess(response.data));
                return true;
            } 
        } catch (error) {
            console.log(error);
            if(error.response.data.error === 'Error integrating notification'){
                dispatch(integrateNotificationFailed(true));
                return false;
            }
        }
    }
}

const integrateNotification = () =>({
    type: INTEGRATE_NOTIFICATION,
    payload:true
})

const integrateNotificationSuccess = (notification) =>({
    type: INTEGRATE_NOTIFICATION_SUCCESS,
    payload:notification
})

const integrateNotificationFailed = (status, info) =>({
    type: INTEGRATE_NOTIFICATION_FAILED,
    payload:{
        status:status,
        info:info
    }
})