import React, { Component, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

class StoryContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        const { story } = this.props;

        return (
            <div>
                <div style={storyIdContainerStyle}>
                    <div style={storyIdStyle}>
                        {story.id}
                    </div>
                </div>
                <div style={flex}>
                    <div style={storyTextContainerStyle}>
                        {story.text}
                    </div>
                    {/* <div style={storyImageContainerStyle} >
                        <img
                            src={story.image}
                            style={{
                                border: ' 1px solid black',
                                borderRadius: '50%',
                                width: this.props.zoomLevel * 0.9999 + 34 + 'px',
                                height: this.props.zoomLevel * 0.9999 + 34 + 'px',
                                minHeight: '25px',
                                minWidth: '25px',
                                maxHeight: '52px',
                                maxWidth: '52px',
                            }}
                        />
                    </div> */}
                </div>
                <div style={storyStatsContainerStyle}>
                    <FontAwesomeIcon icon={faComment} style={{color: '#aebedb', }} />
                    <div style={storyStatsNumber}>2</div>
                </div>
            </div>
        )
    }
};

const flex = {
    display: 'flex',
    flexDirection: 'row',
};

const storyIdStyle = {
    display: 'inline-block',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(241, 102, 81)',
    padding: '2px 4px',
    margin: '2px 2px 1px 2px',
    borderRadius: '6px',
};

const storyIdContainerStyle = {
    margin: '2px auto',
    // fontSize: '0.7rem',
    fontWeight: '400',
    textAlign: 'left',
}

const storyTextContainerStyle = {
    textAlign: 'left',
    padding: '2px',
}

const storyImageContainerStyle = {
    margin: '4px',
};

// const storyImageStyle = {
//     border: ' 1px solid black',
//     borderRadius: '50%',
//     maxHeight: '38px',
//     maxWidth: '38px',
// };

const storyStatsContainerStyle = {
    textAlign: 'left',
    padding: '2px',
    margin: '10px 2px 1px',
};

const storyStatsNumber = {
    display: 'inline-block',
    padding: '1px 4px 0px',
};

export default StoryContent;
