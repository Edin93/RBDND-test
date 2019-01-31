import React, { Component, } from 'react';
import ActivityCard from './ActivityCard';

class Activities extends Component{
    constructor(props){
        super(props);
        this.state = {};
    };

    render() {
        return(
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    minHeight: '18px',
                }}
            >
                {
                    this.props.activities.map((activity,index) => {
                        const tasks = activity.tasks;
                        if (tasks.length > 0 ) {
                            return tasks.map((task, j) => {
                                if (j == 0) {
                                    return (
                                        <div
                                            key={j}
                                            style={{
                                                display: 'flex',
                                                display: 'column',
                                            }}
                                        >
                                            <div 
                                                style={{
                                                    width: this.props.zoomLevel * 1 + 210 + 'px',
                                                    height: this.props.zoomLevel * 0.7 + 50 + 'px',
                                                    fontSize: this.props.zoomLevel * 0.1 + 14,
                                                    paddingRight: '0.2em',
                                                }}
                                            >
                                                <ActivityCard activity={activity} />
                                            </div>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div
                                            key={j}
                                            style={{
                                                display: 'flex',
                                                display: 'column',
                                            }}
                                        >
                                            <div 
                                                style={{
                                                    width: this.props.zoomLevel * 1 + 210 + 'px',
                                                    height: this.props.zoomLevel * 0.7 + 50 + 'px',
                                                    fontSize: this.props.zoomLevel * 0.1 + 14,
                                                    paddingRight: '0.2em',
                                                }}
                                            >
                                                {``}
                                            </div>
                                        </div>
                                    )
                                }
                            });
                        }
                        else {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        display: 'column',
                                    }}
                                >
                                    <div 
                                        style={{
                                            width: this.props.zoomLevel * 1 + 210 + 'px',
                                            height: this.props.zoomLevel * 0.7 + 50 + 'px',
                                            fontSize: this.props.zoomLevel * 0.1 + 14,
                                            paddingRight: '0.2em',
                                        }}
                                    >
                                        <ActivityCard activity={activity} />
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        );
    }
};

export default Activities;





































































































// import React, { Component, } from 'react';
// import { Flex } from 'react-flex-material/lib/flex';
// import ActivityCard from './ActivityCard';

// class Activities extends Component{
//     constructor(props){
//         super(props);
//         this.state = {};
//     };

//     render() {
//         return(
//             <div 
//                 style={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     minHeight: '18px',
//                 }}
//             >
//                 {this.props.activities.map((activity,index) => {
//                     return (
//                         <div
//                             key={index}
//                             style={{
//                                 display: 'flex',
//                                 display: 'column',
//                             }}
//                         >
//                             <div 
//                                 style={{ 
//                                     width: this.props.zoomLevel * 1 + 210 + 'px',
//                                     height: this.props.zoomLevel * 0.7 + 50 + 'px', 
//                                     fontSize: this.props.zoomLevel * 0.1 + 14,
//                                     paddingRight: '0.2em',
//                                 }} 
//                             >
//                                 <ActivityCard activity={activity} />
//                             </div>
//                         </div>
//                     );
//                 })
//                 }
//             </div>
//         );
//     }
// };

// export default Activities;
