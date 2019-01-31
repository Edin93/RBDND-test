import React, { Component, Fragment } from 'react';
import { Draggable } from "react-beautiful-dnd";
import StoryContent from './StoryContent';

class StoryCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    };

    render() {

        return(
            <Fragment>
                {
                    (this.props.story.id !== null) ?
                        <Draggable
                            draggableId={this.props.story.id}
                            index={this.props.index}
                        >
                            {(provided, snapshot) => {
                                return (
                                    <div 
                                        className="StoryCardDesign"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <StoryContent story={this.props.story} zoomLevel={this.props.zoomLevel} />
                                    </div>
                                );
                            }}
                        </Draggable> :
                        null
                }
            </Fragment>
        )
    }
}

export default StoryCard;
