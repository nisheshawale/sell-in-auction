import React, { Component } from "react";
import { connect } from "react-redux";

import { addItem } from "../../actions/Items";
import PropTypes from "prop-types";

export class Form extends Component {
  state = {
    name: "",
    picture: null,
    description: "",
    current_bid: "",
    number_of_hours: "",
    bid_time: "",
    winner: "",
  };

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleImageChange = (e) => {
    this.setState({
      picture: e.target.files[0],
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("picture", this.state.picture);
    form_data.append("name", this.state.name);
    form_data.append("description", this.state.description);
    form_data.append("current_bid", this.state.current_bid);
    form_data.append("number_of_hours", this.state.number_of_hours);
    form_data.append("bid_time", this.state.bid_time);
    form_data.append("winner", this.state.winner);
    this.props.addItem(form_data);
    this.setState({
      name: "",
      picture: null,
      description: "",
      current_bid: "",
      number_of_hours: "",
      bid_time: "",
      winner: "",
    });
  };

  render() {
    const {
      name,
      picture,
      description,
      current_bid,
      number_of_hours,
      bid_time,
      winner,
    } = this.state;
    return (
      <div className="container-fluid w-50">
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
                name="picture"
                accept="image/png, image/jpeg"
                onChange={this.handleImageChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                type="text"
                name="description"
                onChange={this.onChange}
                value={description}
              />
            </div>
            <div className="form-group">
              <label>Initial Bid Amount</label>
              <input
                className="form-control"
                type="text"
                name="current_bid"
                onChange={this.onChange}
                value={current_bid}
              />
            </div>
            <div className="form-group">
              <label>Number of hours after which bidding finishes</label>
              <input
                className="form-control"
                type="number"
                // min="1"
                name="number_of_hours"
                onChange={this.onChange}
                value={number_of_hours}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addItem })(Form);
