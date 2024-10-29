import React, { useEffect } from "react";
import ResCard from "./ResCard";

import { useState } from "react";
import { API_LINK } from "../utils/constants"

import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfResturant, setListOfResturant] = useState([]);
    const [filteredResturant, setFilteredResturant]=useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        fetch(API_LINK)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setListOfResturant(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
                setFilteredResturant(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            });
    };

    // conditional rendering

    return (listOfResturant.length === 0) ? <>
        < button className="shimmer-button" ></button >
        <Shimmer />
    </> : (
        <div className="body">
            <button className="top-rated-btn"
                onClick=
                {
                    () => setListOfResturant(listOfResturant.filter(res => res.info.avgRating > 4))
                }>
                Filter Top Rated</button>
            <div className="search-box">
                <input type={"text"} className="search" value={searchValue}
                    onChange=
                    {
                        (e) => setSearchValue(e.target.value)
                    } />
                <button className="search-btn"
                    onClick=
                    {
                        () => setFilteredResturant(listOfResturant.filter(res => (
                            res.info.name.toLowerCase().includes(searchValue.toLowerCase())
                        )))
                    }>
                    Search</button>
            </div>
            <div className="res-container">
                {filteredResturant.map((res) => {
                    return <ResCard key={res.info.id} resData={res} />
                })}
            </div>
        </div>
    )
};

export default Body;