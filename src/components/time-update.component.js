import React from 'react';
import { connect } from 'react-redux';
import { updateTime, fetchTime, updateTimeAsyncThunk } from '../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        updateTime: (newTime) => dispatch(updateTime(newTime)),
        updateTimeAsyncThunk: () => dispatch(updateTimeAsyncThunk())
    };
};

class ConnectedUpdateTime extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleFetchTime = this.handleFetchTime.bind(this);
    }

    handleButtonClick(event) {
        event.preventDefault();
        const date = Date.now();
        this.props.updateTime(date);
    }

    handleFetchTime() {
        // Calls the action method which awaits result of async method and dispatches change through store
        this.props.updateTimeAsyncThunk();
    }

    render() {
        return (
            [
            <div key="static">
                <button onClick={this.handleButtonClick}>Update time (sync)</button>                
            </div>,
            <div key="dynamic">
                <button onClick={this.handleFetchTime}>Fetch time (async)</button>
            </div>
            ]
        );
    }
}

const UpdateTime = connect(null, mapDispatchToProps)(ConnectedUpdateTime);

export default UpdateTime;