import React, { Component, Fragment } from 'react';
import { Flex } from 'react-flex-material/lib/flex';
import Activities from './Activities';
import Tasks from './Tasks';
import Releases from './Releases';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class StoryMapGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        };
    };

    Scrolling = () => {
        var isSyncingLeftScroll = false,
            isSyncingRightScroll = false,
            leftDiv = document.getElementById('top'),
            rightDiv = document.getElementById('bot');

        leftDiv.onscroll = () => {
            if (!isSyncingLeftScroll) {
                isSyncingRightScroll = true;
                rightDiv.scrollLeft = leftDiv.scrollLeft;
            }
            isSyncingLeftScroll = false;
        };

        rightDiv.onscroll = () => {
            if (!isSyncingRightScroll) {
                isSyncingLeftScroll = true;
                leftDiv.scrollLeft = rightDiv.scrollLeft;
            }
            isSyncingRightScroll = false;
        };
    };

    getIndex = (array, attr, value) => {
        for(let i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    };

    onDragUpdate = update => {
        console.log("==+++++++++++> this is UPDATE : ", update);
        if (update.destination) {
            // console.log(
            //     "destination droppable :::",
            //     JSON.parse(update.destination.droppableId)
            // );
            
        }
    };

    onStoryDragEnd = result => {
        // console.log("RESULT --------->  ", result);

        if (!result.destination) {
            return;
        }

        else {
        // if (result.combine) {

            const draggableId = result.draggableId;
            const source = {
                ...result.source,
                droppableId: JSON.parse(result.source.droppableId),
            };

            const destination = {
                ...result.destination,
                droppableId: JSON.parse(result.destination.droppableId),
            };

            // console.log(" **************** DRAGGABLE ID **************** ");
            // console.log(draggableId);
            // console.log(" **************** SOURCE **************** ");
            // console.log(source);
            // console.log(" **************** DESTINATION **************** ");
            // console.log(destination);

            let start, finish, draggableElement;

            let releases = this.state.data.releases;
            
            for (let i=0; i < releases.length; i++) {
                let release = releases[i];
                //  console.log('release is --------> ', release);

                // To change from source
                if (release.id === source.droppableId.release) {
                    start = release.storiesByTasks[source.droppableId.task];
                    draggableElement = start.find(el => el.id === draggableId);
                    // console.log('start is : ', start);
                    this.setState(state => {
                        let storyIndex = this.getIndex(start, "id", draggableId);
                        state.data.releases.map(currentRel => {
                            return (currentRel.id === release.id) ?
                                        currentRel.storiesByTasks[source.droppableId.task].splice(storyIndex, 1) :
                                        currentRel;
                        });
                        return state;
                    });
                }

                // To change to destination
                if (release.id === destination.droppableId.release) {
                    finish = release.storiesByTasks[destination.droppableId.task]; // might be undefined.
                    //  console.log('finish is : ', finish);
                    this.setState(state => {
                        state.data.releases.map(currentRel => {
                            return (currentRel.id === release.id) ?
                                (
                                    currentRel.storiesByTasks[destination.droppableId.task] ? 
                                        currentRel.storiesByTasks[destination.droppableId.task].splice(destination.index, 0, draggableElement) :
                                        currentRel.storiesByTasks[destination.droppableId.task] = [draggableElement]
                                )
                                : currentRel;
                        });
                        return state;
                    });
                }
            }
        }

    };


    onTaskDragEnd = result => {
        // console.log("RESULT --------->  ", result);

        
        if (!result.destination) {
            return;
        }

        else {
        // if (result.combine) {

            const draggableId = result.draggableId;
            const source = result.source;
            const destination = result.destination;

            // console.log(" **************** DRAGGABLE ID **************** ");
            // console.log(draggableId);
            // console.log(" **************** SOURCE **************** ");
            // console.log(source);
            // console.log(" **************** DESTINATION **************** ");
            // console.log(destination);

            let start, finish, draggableElement;
            let activities = this.state.data.activities; 
            
            for (let i=0; i < activities.length; i++) {
                let activity = activities[i];
                //  console.log('activity is --------> ', activity);

                // To change from source
                if (activity.id === source.droppableId) {
                    start = activity.tasks;
                    draggableElement = start.find(el => el.id === draggableId);
                    // console.log('start is : ', start);
                    this.setState(state => {
                        let storyIndex = this.getIndex(start, "id", draggableId);
                        state.data.activities.map(currentActivity => {
                            return (currentActivity.id === activity.id) ?
                                        currentActivity.tasks.splice(storyIndex, 1) :
                                        currentActivity;
                        });
                        return state;
                    });
                }

                // To change to destination
                if (activity.id === destination.droppableId) {
                    finish = activity.tasks; // might be undefined.
                    //  console.log('finish is : ', finish);
                    this.setState(state => {
                        state.data.activities.map(currentActivity => {
                            return (currentActivity.id === activity.id) ?
                                (
                                    currentActivity.tasks ? 
                                        currentActivity.tasks.splice(destination.index, 0, draggableElement) :
                                        currentActivity.tasks = [draggableElement]
                                )
                                : currentActivity;
                        });
                        return state;
                    });
                }
            }
        }
    };

    onDragStart = start => {
        console.log(
            "onDragStart ======> ",
            start
        );
    };


    //   -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ RENDER -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ 
    render() {
        var activities = [];
        var tasks = [];
        if (this.state.data.activities) {
            for (var i = 0; i < this.state.data.activities.length; i++) {
                activities.push(this.state.data.activities[i]);
    
                if (this.state.data.activities[i].tasks) {
                    for (var j = 0; j < this.state.data.activities[i].tasks.length; j++) {
                        tasks.push(this.state.data.activities[i].tasks[j]);
                        // if (j > 0)
                        //     activities.push({});
                    }
                }
                if (this.state.data.activities[i].tasks.length == 0) {
                    tasks.push({});
                }
            }
        }

        // console.log("-----STATE DATA-----");
        // console.log(this.state);
        // console.log(
        //     "zoomLevel ----> ",
        //     this.props.zoomLevel
        // );

        return (
            <div className="contain">
    
                <div className="divun" id="top" >
                    <Activities
                        // activities={activities}
                        activities={this.state.data.activities}
                        zoomLevel={this.props.zoomLevel}
                    />

                    <DragDropContext
                        onDragEnd={this.onTaskDragEnd}
                        onDragStart={this.onDragStart}
                    >
                        {
                            <Tasks
                                // activities={activities}
                                activities={this.state.data.activities}
                                tasks={this.state.data.tasks}
                                zoomLevel={this.props.zoomLevel}
                            />
                        }
                    </DragDropContext>
                </div>
    
                <div className="divdeux" id="bot" onScroll={this.Scrolling} >
                    <DragDropContext
                        onDragEnd={this.onStoryDragEnd}
                        onDragStart={this.onDragStart}
                    >
                        <Releases
                            zoomLevel={this.props.zoomLevel}
                            tasks={tasks}
                            // tasks={this.state.data.tasks}
                            releases={this.state.data.releases}
                        />
                    </DragDropContext>
                </div>
            </div >
        );
    }
}

export default StoryMapGrid;
