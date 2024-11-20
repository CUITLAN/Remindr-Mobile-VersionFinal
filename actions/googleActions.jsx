//We import the dependencies from axios
import clienteAxios from '../config/axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
//We import the types
import {
    GET_GOOGLEACCOUNT,
    GET_GOOGLEACCOUNT_SUCCESS,
    GET_GOOGLEACCOUNT_FAILED,
    REGISTER_GOOGLEACCOUNT,
    REGISTER_GOOGLEACCOUNT_SUCCESS,
    REGISTER_GOOGLEACCOUNT_FAILED
} from '../types';

export function getGoogleAccountsAction(id) {
    return async (dispatch) => {
        dispatch(getGoogleAccount());
        try {
            //Call the api to get the google accounts
            const response = await clienteAxios.get(`/getAccount/${id}`);
            if (response.data.message === 'User not found') {
                dispatch(getGoogleAccountFailed(response.data.message))
            } if (response.data.message === 'Campos incompletos') {
                dispatch(getGoogleAccountFailed(response.data.message))
            }
            if (response.data.code === 200) {
                const updateUserData = async () => {
                    try {
                      // Obtén el objeto almacenado en AsyncStorage
                      const storedUserData = await AsyncStorage.getItem('userData'); // Usa await para obtener el valor
                  
                      // Maneja el caso donde no hay datos almacenados
                      const userData = storedUserData ? JSON.parse(storedUserData) : {}; // Maneja null
                  
                      // Actualiza el valor de una propiedad existente o agrega una nueva propiedad
                      userData.googleAccounts = response.data.message;
                  
                      // Almacena el objeto actualizado en AsyncStorage
                      await AsyncStorage.setItem('userData', JSON.stringify(userData)); // Usa await para guardar
                  
                      // Despacha la acción de éxito
                      dispatch(getGoogleAccountSuccess(response.data.message));
                    } catch (error) {
                      console.error('Error actualizando userData en AsyncStorage:', error);
                    }
                  };
                  // Llama a la función
                  updateUserData();                  
            }
        } catch (error) {
            console.log(error)
            dispatch(getGoogleAccountFailed(true))
        }
    }
}
//Set the state to loading
const getGoogleAccount = () => ({
    type: GET_GOOGLEACCOUNT,
    payload: true
})
//Set the state to not loading and save the accounts
const getGoogleAccountSuccess = (accounts) => ({
    type: GET_GOOGLEACCOUNT_SUCCESS,
    payload: accounts
})
//Set the state to not loading and set the error
const getGoogleAccountFailed = (status) => ({
    type: GET_GOOGLEACCOUNT_FAILED,
    payload: status
})

export function registerGoogleAccountAction(googleData) {
    return async (dispatch) => {
        dispatch(registerGoogleAccount())
        try {
            const id = googleData.id;
            //Call the api to save the google data
            const response = await clienteAxios.post(`./save/googledata/${id}`, googleData);
            if(response.data.error === 'No se pudieron obtener los cursos y trabajos de Google Classroom, revisa los permisos.'){
                dispatch(registerGoogleAccountFailed(true));
            }
            if (response.data.error === 'Google Account already exists') {
                dispatch(registerGoogleAccountFailed(response.data.error));
                return {status: 'success', title: 'Hubo un error',info:'La cuenta ya esta registrada !'};
            } else {
                dispatch(registerGoogleAccountSucces(response.data));
                return {status: 'success', title: 'Cuenta agregada!', info: 'La cuenta se agregó correctamente!'};
            }
        } catch (error) {
            console.log(error);
            if(error.response){
                if (error.response.data.error === 'Error al guardar los datos de Google') {
                    dispatch(registerGoogleAccountFailed(true));
                    return {status: 'error', title: 'Hubo un error',info: error.response.data.error};
                }
                if(error.resposne.data.error === 'No se pudieron obtener los cursos y trabajos de Google Classroom, revisa los permisos.'){
                    dispatch(registerGoogleAccountFailed(true));
                    return {status: 'error', title: 'Hubo un error', info:error.response.data.error};
                }
            }
            else if (error.request){
                dispatch(registerGoogleAccountFailed(true)); 
                return {status: 'error', title:'Hubo un error', info: 'Opsss! Parece que nuestro servidor esta teniendo problemas, intentalo mas tarde'}
            }
        }
    }
}

const registerGoogleAccount = () => ({
    type: REGISTER_GOOGLEACCOUNT,
    payload: true
})

const registerGoogleAccountFailed = (status) => ({
    type: REGISTER_GOOGLEACCOUNT_FAILED,
    payload: status
})

const registerGoogleAccountSucces = (googleData) => ({
    type: REGISTER_GOOGLEACCOUNT_SUCCESS,
    payload: googleData
})