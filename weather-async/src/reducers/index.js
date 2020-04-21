import {SET_SEARCH,GET_WEATHER_START,GET_WEATHER_SUCCESS} from '../actions' 
export const intitialState = {
    searchWoeid:"",
    term:"",
    temperature:'',
    searchFinished:false
    

}
export const reducer = (state = intitialState, action) => {
    switch(action.type){
        case SET_SEARCH : 
            return {
                ...state,
                term: action.payload
            };
        case GET_WEATHER_START : 
            return   {
                ...state,
                searchFinished:false
        }
        case GET_WEATHER_SUCCESS :
            return {
                ...state,
                searchFinished:true,
                temperature: action.payload.the_temp
            }

        
        default:
            return state;
    }
}