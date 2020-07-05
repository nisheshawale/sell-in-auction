import React, { Component } from "react";
import { connect } from "react-redux";

import { addItem } from "../../actions/Items";
import PropTypes from "prop-types";

export class Form extends Component {
  state = {
    name: "",
    picture: null,
    current_bid: "",
    bid_time: "",
    owner: "",
    winner: "",
  };

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleImageChange = (e) => {
    this.setState({
      "picture": e.target.files[0],
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("picture", this.state.picture);
    form_data.append("name", this.state.name);
    form_data.append("current_bid", this.state.current_bid);
    form_data.append("bid_time", this.state.bid_time);
    form_data.append("owner", this.state.owner);
    form_data.append("winner", this.state.winner);
    this.props.addItem(form_data);
  };

  render() {
    const { name, picture, current_bid, bid_time, owner, winner } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Item for Auction</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Picture</label>
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Current Bid</label>
            <input
              className="form-control"
              type="text"
              name="current_bid"
              onChange={this.onChange}
              value={current_bid}
            />
          </div>
          <div className="form-group">
            <label>Bid Time</label>
            <textarea
              className="form-control"
              type="text"
              name="bid_time"
              onChange={this.onChange}
              value={bid_time}
            />
          </div>
          <div className="form-group">
            <label>Owner</label>
            <input
              className="form-control"
              type="text"
              name="owner"
              onChange={this.onChange}
              value={owner}
            />
          </div>
          <div className="form-group">
            <label>Winner</label>
            <input
              className="form-control"
              type="text"
              name="winner"
              onChange={this.onChange}
              value={winner}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addItem })(Form);
