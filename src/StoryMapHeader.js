import React, { Component } from 'react';
import { Flex } from 'react-flex-material/lib/flex';

class StoryMapHeader extends Component{
    constructor(props){
        super(props);
        this.state = {};
    };

    onZoomLevelChange = (event) => {
        this.props.changeZoomLevel(event.target.value);
    };

    render() {
        return (
            <Flex layout="row" style={{ marginTop: '50 px' }}>
                <p title='zoomLevel' type="text" value={this.props.zoomLevel}></p>
                <Flex layout="row" className="navbar">
                    <span style={{ color: "white", fontsize: 15 }}>Statsh</span>
    
                    <div style={{ float: "right" }}>
                        <input type="range" name="" id="range" min="-70" max="70" onChange={this.onZoomLevelChange} value={this.props.zoomLevel} />
                    </div>
                </Flex >
            </Flex>
    
        )
    }
}

export default StoryMapHeader;
