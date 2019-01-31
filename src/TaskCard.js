import React, { Component, Fragment, } from 'react';
import { Draggable } from 'react-beautiful-dnd';

class TaskCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        // console.log("Task is here ===> ", this.props.task);

        return (
            <Fragment>
                {
                    (this.props.task.id !== null) ?
                        <Draggable
                            draggableId={this.props.uniqueDroppableTaskId}
                            index={this.props.index}
                        >
                            {(provided, snapshot) => {
                                // console.log("DRAG PROVIDED ++++++++++++> ", provided);
                                // console.log("DRAG SNAPSHOT ===========> ", snapshot);
                                return (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <div
                                            className="TaskCardDesign"
                                            style={{
                                                // transform: snapshot.isDragging ? 'scale(0.75)' : 'scale(1)',
                                                width: snapshot.isDragging ? '50%' : '100%',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {this.props.task.id}
                                        </div>
                                    </div>
                                );
                            }}
                        </Draggable>
                        :
                        null
                }
            </Fragment>
        )
    }
}

export default TaskCard;
