import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name.join()}`);
      }
      if (error.msg.picture) {
        alert.error(`Picture: ${error.msg.picture.join()}`);
      }
      if (error.msg.current_bid) {
        alert.error(`Current Bid: ${error.msg.current_bid.join()}`);
      }
      if (error.msg.bid_time) {
        alert.error(`Bid Time: ${error.msg.bid_time.join()}`);
      }
      if (error.msg.date_posted) {
        alert.error(`Date Posted: ${error.msg.date_posted.join()}`);
      }
      if (error.msg.owner) {
        alert.error(`Owner: ${error.msg.owner.join()}`);
      }
      if (error.msg.winner) {
        alert.error(`Winner: ${error.msg.winner.join()}`);
      }
      if (error.msg.username) {
        alert.error(error.msg.username);
      }
      if (error.msg.non_field_errors) {
        alert.error(error.msg.non_field_errors.join());
      }
    }
    if (message !== prevProps.message) {
      if (message.deleteItem) {
        alert.success(message.deleteItem);
      }
      if (message.addItem) {
        alert.success(message.addItem);
      }
      if (message.passwordNotMatch) {
        alert.error(message.passwordNotMatch);
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
