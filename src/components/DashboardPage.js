import React from "react";
import Map from "./Map";

export default class DashboardPage extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <div className="container__input">
                    <input type="text" placeholder="Starting point" id="start" required/>
                    <input type='text' placeholder="Destination" id="finish" required/>
                </div>
                <div className="container__dashboard">
                    <Map />
                </div>
            </div>
        );
    };
};
