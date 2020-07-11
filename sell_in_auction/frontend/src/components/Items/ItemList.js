import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "../../actions/Items";

export class ItemList extends Component {
  static propTypes = {
    Items: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    getItems: PropTypes.func.isRequired,
    // deleteItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const all = true;
    this.props.getItems(all);
    // this.props.setSearch('');
  }


  render() {
    const selectedItems = this.props.Items.filter((val) => val.name.toLowerCase().includes(this.props.value.toLowerCase()));

    return (
      <Fragment>
        <h2>Items</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Current Bid</th>
              <th>Maximum Bidding Time</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <a href={item.picture}>Picture</a>
                </td>
                <td>{item.current_bid}</td>
                <td>{item.bid_time}</td>
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
  value: state.search.value
});

export default connect(mapStateToProps, { getItems })(ItemList);
