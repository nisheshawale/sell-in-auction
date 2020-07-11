import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems, deleteItem } from "../../actions/Items";

export class SpecificItems extends Component {
  static propTypes = {
    Items: PropTypes.array.isRequired,
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const all = false;
    this.props.getItems(all);
  }

  render() {
    return (
      <Fragment>
        <h2>Items</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Current Bid</th>
              <th>Owner</th>
              <th>Date Posted</th>
              <th>Maximum Bidding Time</th>
              <th>Winner</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.Items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <a href={item.picture}>Picture</a>
                </td>
                <td>{item.current_bid}</td>
                <td>{item.owner}</td>
                <td>{item.date_posted}</td>
                <td>{item.bid_time}</td>
                <td>{item.winner}</td>
                <td>
                  <button
                    onClick={this.props.deleteItem.bind(this, item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Items: state.Items.Items,
});

export default connect(mapStateToProps, { getItems, deleteItem })(SpecificItems);
