import React from 'react';
import UpdateTime from './time-update.component';
import TimeDisplay from './time-display.component';
import Routes from '../routes/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTime, fetchTime, updateTimeAsyncThunk } from '../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        updateTime: (newTime) => dispatch(updateTime(newTime))
    };
};

export class ConnectedApp extends React.Component {

    constructor(props) {
        super(props);
    }

    /* Example of using async/await in lifecycle method to load data into subcomponent */
    async componentWillMount() {
        const fetchResponse = await fetchTime();
        const fetchResult = await fetchResponse.json();
        this.props.updateTime(fetchResult.currentFileTime);
    }

    render() {
        return (
            <div className='row mt-5'>
                <div className='col-md-4 offset-md-1'>
                    <div key="timeDisplay">
                        <TimeDisplay />
                        <UpdateTime />
                    </div>
                    <Router>
                        <Routes />
                    </Router>
                </div>
            </div>
        );
    }
}

const App = connect(null, mapDispatchToProps)(ConnectedApp);

export default App;
