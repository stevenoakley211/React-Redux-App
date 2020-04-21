import React from "react";
import { connect } from "react-redux";
import{Card} from "../styles"
const Weather = props =>{
    const getFahrenheit = (x = props.temperature) =>{
        let fahrenheit = (x*1.8)+32
        return Math.round(fahrenheit)
    }
    return(
        <div>
            {props.searchFinished ? (
            <Card>
                <h1>{props.city}</h1>
                <p>Currently: {getFahrenheit()}°F</p>
            </Card>
            ) : (
                <div>
                    <h1>Search For the weather</h1>
                </div>

            ) }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        temperature: state.temperature,
        searchFinished: state.searchFinished,
        city: state.term
    }
}

export default connect (mapStateToProps)(Weather)