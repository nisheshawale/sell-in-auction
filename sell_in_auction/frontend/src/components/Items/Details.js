import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItem } from "../../actions/Items";
import { createMessage } from "../../actions/messages";
import PropTypes from "prop-types";

import moment from "moment";

export class Details extends Component {
  state = {
    current_bid: "",
    contact: "",
    curTime: new Date().toLocaleString(),
  };

  static propTypes = {
    Items: PropTypes.array.isRequired,
    updateItem: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (ID, selectedItem, e) => {
    e.preventDefault();
    const updatedData = {
      current_bid: this.state.current_bid,
      contact: this.state.contact,
      winner: this.props.auth.user.username,
    };

    if (this.state.current_bid > selectedItem.current_bid) {
      this.props.updateItem(updatedData, ID);
    } else {
      this.props.createMessage({
        bidNotEnough: "Bid made should be greater than current bid.",
      });
    }

    this.setState({
      current_bid: "",
      contact: "",
    });
  };

  render() {
    const { id } = this.props.match.params;

    const selectedItem = this.props.Items.find((x) => x.id.toString() === id);
    const currentDate = moment().format("DD/MM/YYYY HH:mm:ss");
    const future = moment(selectedItem.date_posted)
      .add(selectedItem.number_of_hours, "hours")
      .format("DD/MM/YYYY HH:mm:ss");
    var d = moment.duration(
      moment(future, "DD/MM/YYYY HH:mm:ss").diff(
        moment(currentDate, "DD/MM/YYYY HH:mm:ss")
      )
    );
    const hour = d.days() * 24 + d.hours()
    const minute = d.minutes()
    const second = d.seconds()
    const timeDisplay =
      hour + ":" + minute + ":" + second;

    const buttonPart = (
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    );

    const finished = (<h5 className="text-danger">Bidding time has finished.</h5>)

    const time = (
      <p className="card-text text-muted">Time remaining: {timeDisplay}</p>
    );

    let timeFlag = 1;
    if ((hour < 0) || (minute < 0) || (second < 0)){
      timeFlag = 0;
    }

    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={selectedItem.picture} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{selectedItem.name}</h5>
              <p className="card-text">{selectedItem.description}</p>
              <p className="card-text">
                Current Bid: {selectedItem.current_bid}
              </p>
              <form onSubmit={this.onSubmit.bind(this, id, selectedItem)}>
                <div className="form-group">
                  <input
                    onChange={this.onChange}
                    className="form-control"
                    name="current_bid"
                    type="text"
                    placeholder="Make a bid"
                    value={this.state.current_bid}
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={this.onChange}
                    className="form-control"
                    name="contact"
                    type="text"
                    placeholder="Contact"
                    value={this.state.contact}
                  />
                </div>
                {timeFlag ? buttonPart:finished}
                {/* <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div> */}
              </form>
              {timeFlag ? time: ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Items: state.Items.Items,
  auth: state.auth,
});

export default connect(mapStateToProps, { updateItem, createMessage })(Details);
