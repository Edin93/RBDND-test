import React, { Component } from 'react';

const ActivityCard = ({ activity }) => {

    if (activity.id != null) {
        return (
            <div 
                className="ActivityCardDesign"
                style={{
                    // width: '100%',
                }}
            >
                {activity.id}
            </div>
        );
    }
    else {
        return null;
    }
}

export default ActivityCard;
