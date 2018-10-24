import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "actions";

class CommentBox extends Component {
    state = { comment: "" };

    componentDidMount() {
        this.shouldNavigageAway();
    }

    componentDidUpdate(prevProps, prevState) {
        this.shouldNavigageAway();
    }

    shouldNavigageAway() {
        if (!this.props.auth) {
            this.props.history.push("/");
        }
    }

    handleChange = event => {
        this.setState({
            comment: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({
            comment: ""
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.comment}
                    />
                    <div>
                        <button>Submit comment</button>
                    </div>
                </form>
                <button
                    className="fetch-comments"
                    onClick={this.props.fetchComments}
                >
                    Fetch Comments
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(
    mapStateToProps,
    actions
)(CommentBox);
