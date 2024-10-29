import React, { useState } from "react";

import {CDN_LINK} from "../utils/constants"

const ResCard = (props) => {
    const {name, avgRating, cuisines, cloudinaryImageId} = props.resData.info;

    return (
        <div className="res-card">
            <img src={{CDN_LINK} + cloudinaryImageId} alt="res-logo" className="res-logo" />
            <h2 className="res-name">{name}</h2>
            <h4 className="res-rating">{avgRating} <span>★</span></h4>
            <h5 className="cuisines">{cuisines.join(", ")}</h5>
        </div>
    );
};

export default ResCard;