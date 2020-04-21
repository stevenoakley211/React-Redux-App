import axios from 'axios'

export const SET_SEARCH = "SET_SEARCH";
export const GET_WEATHER_START = "GET_WEATHER_START";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS"


export const getWeather = (id) => dispatch => {
    dispatch({type:GET_WEATHER_START });
    dispatch({type:SET_SEARCH,payload: id})
    axios
    .get(`https://www.metaweather.com/api/location/search/?query=${id}`)
    .then(res =>{
       axios
       .get(`https://www.metaweather.com/api/location/${res.data[0].woeid}`)
       .then(res =>{
          dispatch({type: GET_WEATHER_SUCCESS,payload: res.data.consolidated_weather[0]}) 
       })
    })
        
}

