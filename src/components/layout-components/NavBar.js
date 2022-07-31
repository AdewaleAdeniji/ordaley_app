import React from "react";

const NavBar = () => {
    return (
        <>
        <div className="topnav">
            <div className="flex items-center justify-end">
                <input type="text" className="search-box" placeholder="Search"/>
                <button className="btn btn-track">
                    <img src={require('../../assets/icons/track.svg')} alt="track shipment"/>
                    Track Shipment
                </button>
                <button className="btn btn-notification">
                    <img src={require('../../assets/icons/bell.svg')} alt="notifications"/>
                </button>
                <button className="btn btn-notification">
                    <img src={require('../../assets/icons/user.svg')} alt="user profile"/>
                </button>
            </div>
        </div>
       
        </>
    )
}
export default NavBar;