import axios from "axios"
import { API_URL } from "../utils/constant"

export const SHOW_REPORT = "SHOW_REPORT";
export const SHOW_SUM = "SHOW_SUM";
export const SHOW_AREA = "SHOW_AREA";
export const SHOW_GRAPH = "SHOW_GRAPH";

export const showReport = () =>{
    return (dispatch) =>{
        dispatch({
            type: SHOW_REPORT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios
        .get(`${API_URL}/reportProduct`, {timeout: 120000})
        .then((response) =>{
            dispatch({
                type: SHOW_REPORT,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            }) 
        })
        .catch((error) =>{
            dispatch({
                type: SHOW_REPORT,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            }) 
        })
    }
}

export const showReportSum = () =>{
    return (dispatch) =>{
        dispatch({
            type: SHOW_SUM,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios
        .get(`${API_URL}/reportProduct/sum`, {timeout: 120000})
        .then((response) =>{
            dispatch({
                type: SHOW_SUM,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            }) 
        })
        .catch((error) =>{
            dispatch({
                type: SHOW_SUM,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            }) 
        })
    }
}

export const showReportArea = () =>{
    return (dispatch) =>{
        dispatch({
            type: SHOW_AREA,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios
        .get(`${API_URL}/reportProduct/area`, {timeout: 120000})
        .then((response) =>{
            dispatch({
                type: SHOW_AREA,
                payload: {
                    loading: false,
                    data: response.data,
                    errorMessage: false,
                },
            }) 
        })
        .catch((error) =>{
            dispatch({
                type: SHOW_AREA,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                },
            }) 
        })
    }
}

export const showReportGraph = () =>{
    return (dispatch) =>{
        dispatch({
            type: SHOW_GRAPH,
        });

        const response = axios.get(`${API_URL}/reportProduct/sum`, {timeout: 120000})

        const labels = [];
        const data = [];
        for (let i = 0; i < response.data.length; i++) {
          data.unshift(response.data[i].close)
          //labels.unshift(moment(response.data[i].date).format("LT"))
    
         // if (i === (number - 1)) {
          //  break;
          //}
        }

        dispatch({
                type: SHOW_GRAPH,
                payload: {
                    data,
                    labels,
                },
            }) 
        
        .catch((error) =>{
            dispatch({
                type: SHOW_GRAPH,
                payload: {
                    errorMessage: error.message,
                },
            }) 
        })
    }
}

