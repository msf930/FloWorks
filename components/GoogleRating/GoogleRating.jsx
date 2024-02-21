"use client"

import React from "react";
import { ElfsightWidget } from 'react-elfsight-widget';

const GoogleRating = () => {
    return(
        <div className="ratingContainer">
            <h2>See What Our Customers Are Saying</h2>
            <ElfsightWidget widgetId="e23bb0ed-d297-43e0-8513-01845edfb225" lazy modern />
        </div>
    );
};
export default GoogleRating;