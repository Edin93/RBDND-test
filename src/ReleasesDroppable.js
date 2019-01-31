import React, { Component, Fragment, } from 'react';
import ReleasesDroppableContent from './ReleasesDroppableContent';
import { Droppable } from "react-beautiful-dnd";

class ReleasesDroppable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.currentRef = React.creacteRef();
    };

    render() {

        let {
            uniqueDroppableId,
            releaseId,
            tasks,
            release,
        } = this.props;

        return (
            <Droppable droppableId={uniqueDroppableId} releaseId={releaseId} >
                {
                    (provided, snapshot) => {
                        // console.log("DROPPABLE PROVIDED ------> ", provided);
                        // console.log("Snapshot ----------->", snapshot);
                        return (
                            // <div
                            //     ref={this.currentRef}
                            // >
                                <ReleasesDroppableContent
                                    innerRef={provided.innerRef}
                                    provided={provided}
                                    snapshot={snapshot}
                                    tasks={tasks}
                                    release={release}
                                />
                            // </div>
                        )
                    }
                }
            </Droppable>
        )
    }
}

export default ReleasesDroppable;
