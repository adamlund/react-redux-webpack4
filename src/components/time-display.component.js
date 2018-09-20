import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { currentTime: state.currentTime };
};

const ConnectedTimeDisplay = ({ currentTime }) => (
    <div>Current time is: {currentTime}</div>
);

const TimeDisplay = connect(mapStateToProps)(ConnectedTimeDisplay);

export default TimeDisplay;