import React, { Component, Fragment, } from 'react';
import StoryCard from './StoryCard';
import { Droppable } from "react-beautiful-dnd";
import uuidv1 from 'uuid/v1';


class ReleasesDroppableContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.myRef = React.createRef();
    };


    // setRef = ref => {
    //     // keep a reference to the dom ref as an instance property
    //     this.ref = ref;
    //     // give the dom ref to react-beautiful-dnd
    //     this.props.innerRef(ref);
    //   };

    render() {

        var {tasks, release, provided, snapshot, innerRef, } = this.props;
        var stories = release.storiesByTasks[tasks.id];
        // console.log("STORIES -------> ", stories);

        return (
            <div
                style={{
                    backgroundColor: snapshot.isDraggingOver ? '#e7ebee' : '#f5f6f7',
                    padding: snapshot.isDraggingOver ? '0px 0px 8.5em' : '2px 0px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                // ref={this.myRef}
                {...provided.droppableProps}
                ref={innerRef}
                // ref={this.setRef}
            >
                {
                    // tasks.id && release.storiesByTasks[tasks.id]
                    //     ? 
                            (stories && stories.length > 0)
                                ?
                                stories.map((story, index) => {
                                    return (
                                        <div
                                            key={index} 
                                            style={{
                                                fontSize: this.props.zoomLevel * 0.1 + 14 + 'px',
                                                width: this.props.zoomLevel * 0.99 + 205 + 'px',
                                                height: this.props.zoomLevel * 0.99 + 50 + 'px',
                                                padding: '2px 5px 10px 2px',
                                                margin: '5px 0px',
                                            }}
                                        >
                                            <StoryCard story={story} index={index} zoomLevel={this.props.zoomLevel} />
                                        </div>
                                    )
                                })
                                :
                                <div
                                    style={{
                                        backgroundColor: snapshot.isDraggingOver ? '#e7ebee' : '#f5f6f7',
                                        minHeight: '200px',
                                    }}
                                >
                                </div>
                        // :
                        // <div
                        //     style={{
                        //         backgroundColor: snapshot.isDraggingOver ? '#e7ebee' : '#f5f6f7',
                        //         minHeight: '200px',
                        //     }}
                        // >
                        // </div>
                }
            </div>
        )
    }
}

export default ReleasesDroppableContent;




































































































// import React, { Component, Fragment, } from 'react';
// import StoryCard from './StoryCard';
// import { Droppable } from "react-beautiful-dnd";


// class ReleasesDroppableContent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//         this.myRef = React.createRef();
//     };


//     render() {

//         let {tasks, uniqueDroppableId, release, releaseId, } = this.props;

//         return (
//             <div 
//                 ref={this.props.ref}
//             >
//                 <Droppable droppableId={uniqueDroppableId} releaseId={release.id} >
//                     {
//                         (provided, snapshot) => {
//                             // console.log("DROPPABLE PROVIDED ------> ", provided);
//                             // console.log("Snapshot ----------->", snapshot);
//                             console.log("ReleaseDroppable InnerRef ===> ", provided.innerRef );
//                             return (
//                                 <div
//                                     style={{
//                                         backgroundColor: snapshot.isDraggingOver ? '#e7ebee' : '#f5f6f7',
//                                         padding: snapshot.isDraggingOver ? '0px 0px 8.5em' : '2px 0px',
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                     }}
//                                     ref={provided.innerRef}
//                                     {...provided.droppableProps}
//                                 >
//                                     {
//                                         tasks.id && release.storiesByTasks[tasks.id]
//                                             ? 
//                                                 (release.storiesByTasks[tasks.id].length > 0)
//                                                     ?
//                                                     release.storiesByTasks[tasks.id].map((story, index) => {
//                                                         return (
//                                                             <div
//                                                                 key={index} 
//                                                                 style={{
//                                                                     fontSize: this.props.zoomLevel * 0.1 + 14 + 'px',
//                                                                     width: this.props.zoomLevel * 1 + 205 + 'px',
//                                                                     padding: '2px 5px 10px 2px',
//                                                                     margin: '5px 0px',
//                                                                 }}
//                                                             >
//                                                                 <StoryCard story={story} index={index} zoomLevel={this.props.zoomLevel} />
//                                                             </div>
//                                                         )
//                                                     })
//                                                     :
//                                                     <div
//                                                         style={{
//                                                             backgroundColor: snapshot.isDraggingOver ? '#e7ebee' : '#f5f6f7',
//                                                             minHeight: '200px',
//                                                         }}
//                                                     >
//                                                     </div>
//                                             :
//                                             <div
//                                                 style={{
//                                                     backgroundColor: snapshot.isDraggingOver ? '#e7ebee' : '#f5f6f7',
//                                                     minHeight: '200px',
//                                                 }}
//                                             >
//                                             </div>
//                                     }
//                                 </div>
//                             )
//                         }
//                     }
//                 </Droppable>
//             </div>
//         )
//     }
// }

// export default ReleasesDroppableContent;
