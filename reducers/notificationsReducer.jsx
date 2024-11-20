import{
    GET_NOTIFICATION,
    EXCLUDE_NOTIFICATION,
    EXCLUDE_NOTIFICATION_SUCCESS,
    EXCLUDE_NOTIFICATION_FAILED,
    INTEGRATE_NOTIFICATION,
    INTEGRATE_NOTIFICATION_SUCCESS,
    INTEGRATE_NOTIFICATION_FAILED
} from '../types';

const initalState = {
    notifications: null,
    error: null,
    info: '',
    loading: false
}

export default function notificationsReducer(state = initalState, action){
    switch(action.type){
        case GET_NOTIFICATION:
            return{
                ...state,
                notifications:action.payload
            }
        case EXCLUDE_NOTIFICATION:
            return{
                ...state,
                loading:action.payload
            }
        case EXCLUDE_NOTIFICATION_SUCCESS:
            return{
                ...state,
                loading:false,
            }
        case EXCLUDE_NOTIFICATION_FAILED:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case INTEGRATE_NOTIFICATION:
            return{
                ...state,
                loading:action.payload
            }
        case INTEGRATE_NOTIFICATION_SUCCESS:
            return{
                ...state,
                loading:false,
            }
        case INTEGRATE_NOTIFICATION_FAILED:
            return{
                ...state,
                loading:false,
                info:action.payload.info,
                error:action.payload.status
            }
        default:
            return state;
    }
}