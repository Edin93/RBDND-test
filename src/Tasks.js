import React, { Component, Fragment, } from 'react';
import TaskCard from './TaskCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class Tasks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // activities: this.props.activities,
            // zoomLevel: this.props.zoomLevel,
        };
    };

    render(){
        // console.log(
        //     "Activities ===> ",
        //     this.props.activities.map(activity => activity)
        // );

        return(
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                {
                    this.props.activities.map((activity,index) => {
                        let activityId = activity.id;
                        let currentActivity = activity;
                        // console.log("Activitiy ===============> ", activity);
                        // console.log('activity --------> ', `${activityId}`);

                        if (activity.tasks !== undefined && activity.tasks.length > 0) {
                            // console.log('activity tasks --->', activity.tasks);
                            return (
                                <Droppable droppableId={`${activity.id}`} direction="horizontal" key={index} >
                                {
                                    (provided, snapshot) => {
                                        return (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    backgroundColor: snapshot.isDraggingOver ? '#eeeeee' : '#ffffff',
                                                    color: 'black',
                                                    // padding: snapshot.isDraggingOver ? '0px 5em 0px 0px' : '0px',
                                                }}
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                {
                                                    activity.tasks.map((task,index) => {
                                                        // console.log("............>Task ", task);
                                                        let uniqueDroppableTaskId = JSON.stringify({
                                                            activityId: activity.id,
                                                            taskId: task.id,
                                                        });

                                                        return (
                                                            <div
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                }}
                                                                key={index}
                                                            >
                                                                <div 
                                                                    style={{
                                                                        width: this.props.zoomLevel * 1 + 210 + 'px',
                                                                        height: this.props.zoomLevel * 0.7 + 50 + 'px',
                                                                        fontSize: this.props.zoomLevel * 0.1 + 14,
                                                                        paddingRight: '0.4em',
                                                                    }}
                                                                >
                                                                    <TaskCard 
                                                                        uniqueDroppableTaskId={task.id}
                                                                        task={task}
                                                                        index={index}
                                                                    />
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                }               
                            </Droppable>
                            )
                        }
                        

                        else {
                            // console.log('activity tasks --->', activity.tasks);
                            return (
                                <Droppable droppableId={`${activity.id}`} direction="horizontal" key={index} >
                                {
                                    (provided, snapshot) => {
                                        return (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    backgroundColor: snapshot.isDraggingOver ? '#eeeeee' : '#ffffff',
                                                    color: 'black',
                                                    // padding: snapshot.isDraggingOver ? '0px 5em 0px 0px' : '0px',
                                                }}
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                <div
                                                    style={{
                                                        width: this.props.zoomLevel * 1 + 210 + 'px',
                                                        height: this.props.zoomLevel * 0.7 + 50 + 'px',
                                                        fontSize: this.props.zoomLevel * 0.1 + 14,
                                                        paddingRight: '0.2em',
                                                    }}
                                                >
                                                    There's No Tasks, Drop one here.
                                                </div>
                                            </div>
                                        )
                                    }
                                }               
                            </Droppable>
                            );
                        }

                    })
                }
            </div>
        )
    }
}

export default Tasks;
