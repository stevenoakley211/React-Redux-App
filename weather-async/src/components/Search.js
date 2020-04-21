import React, {useState} from 'react';
import {connect} from "react-redux";
import {getWeather} from '../actions'


const SearchBar = props => {
    const [term,setTerm] = useState()
    const handleSubmit = event =>{
        event.preventDefault();
        props.getWeather(term)
    }
    const handleChange = (event) => {
        setTerm(event.target.value)
    }
    return (
        
            <form>
                <input type='text' value={term} onChange={handleChange}></input>
                    <button type="submit" onClick={handleSubmit} >Search</button>
            </form>
    )
}
const mapStateToProps = state => {
    return{
        searchTerm: state.term
    }
}
export default connect(mapStateToProps,{getWeather})(SearchBar)