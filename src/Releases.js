import React, { Component,Fragment } from 'react';
import { Flex } from 'react-flex-material/lib/flex';
import StoryCard from './StoryCard';
import { Droppable } from "react-beautiful-dnd";
import './Releases.css';
import ReleasesDroppable from './ReleasesDroppable';


class Releases extends Component{
    constructor(props){
        super(props);
        this.state = {};
    };

    render() {
        return(
            <Fragment>
                {
                    this.props.releases.map((release, i) =>
                        <Fragment key={i}>
                            <Flex layout="row" className="release">
                                {release.id}
                            </Flex>
                            <Flex layout="row" >
                                {
                                    this.props.tasks.map((tasks, j) => {

                                            let uniqueDroppableId = JSON.stringify({
                                                release: release.id,
                                                task: tasks.id,
                                            });


                                            // console.log(j);
                                            // console.log("uniqueDroppableId ======> ", uniqueDroppableId);


                                            return (
                                                <Flex layout="column" key={j}>

                                                    <div 
                                                        style={{
                                                            width: this.props.zoomLevel * 1 + 210 + 'px',
                                                            margin: '0px',
                                                            padding: '3px 0px',
                                                            height: 'auto',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                        }}
                                                        className="droppable-container"
                                                    >
                                                        <ReleasesDroppable
                                                            uniqueDroppableId={uniqueDroppableId}
                                                            releaseId={release.id}
                                                            tasks={tasks}
                                                            release={release}
                                                        />
                                                    </div>
                                                </Flex>
                                            )
                                        }
                                    )
                                }
                            </Flex>
                        </Fragment>)
                    }
            </Fragment>
        )
    }
};

export default Releases;
