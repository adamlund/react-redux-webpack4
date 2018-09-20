import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { addArticle } from '../actions/index';
import uuidv1 from 'uuid';

const mapDispatchToProps = dispatch => {
    console.log('wire up dispatch fn in ConnectedForm');
    return {
        addArticle: article => dispatch(addArticle(article)),
        consoleLog: logString => console.log('mapDispatchToProps consoleLog: ',logString)
    };
};

const mapStateToProps = state => {
    return { currentTime: state.currentTime };
};

class ConnectedForm extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            redirect: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {target} = event;
        this.setState({ [target.id]: target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const {title} = this.state;
        if(title && title.length > 0) {
            const id = uuidv1();
            this.props.addArticle({ title, id});
            this.props.consoleLog(`id: ${id} title: ${title}`);

        } else {
            console.error('title was zero length');
        }
        this.setState({ title: '', redirect: true});
    }

    render() {
        const { title, redirect } = this.state;
        const { currentTime } = this.props;
        return (
            <div>
                {redirect && <Redirect to="/" />}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            value={title}
                            onChange={this.handleChange}
                            ></input>
                    </div>
                    <button type="submit" className="btn btn-success btn-lg">Save</button><Link to="/">Cancel</Link>
                </form>
                <div>
                    <span>Current time is: {currentTime}</span>
                </div>
            </div>
        );
    }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;
