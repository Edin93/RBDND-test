import React, { Component } from 'react';
import StoryMapHeader from './StoryMapHeader';
import StoryMapGrid from './StoryMapGrid';

class StoryMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoomLevel: 0
        };
    };

    changeZoomLevel = (newZoomLevel) => {
        this.setState({
            zoomLevel: newZoomLevel
        });
    };

    render() {
        return (
            <div >

                <StoryMapHeader
                    zoomLevel={this.state.zoomLevel}
                    changeZoomLevel={this.changeZoomLevel}
                />
                <StoryMapGrid
                    data={this.props.data}
                    zoomLevel={this.state.zoomLevel}
                />


            </div>
        );
    }
}

export default StoryMap;
