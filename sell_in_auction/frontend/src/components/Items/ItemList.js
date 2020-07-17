import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "../../actions/Items";
import { Link } from "react-router-dom";

export class ItemList extends Component {
  static propTypes = {
    Items: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    getItems: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const all = true;
    this.props.getItems(all);
  }

  render() {
    const selectedItems = this.props.Items.filter((val) =>
      val.name.toLowerCase().includes(this.props.value.toLowerCase())
    );

    return (
      <Fragment>
        <div className="container-fluid">
          <h2>Items</h2>

          <div className="row row-cols-1 row-cols-md-4">
            {selectedItems.map((item) => (
              <div className="col mb-4" key={item.id}>
                <div className="card h-100">
                  <div className="embed-responsive embed-responsive-4by3">
                  <img src={item.picture} className="card-img-top embed-responsive-item" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Current Bid: {item.current_bid}</p>
            
                    <Link to={`details/${item.id}`}>Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Items: state.Items.Items,
  value: state.search.value,
});

export default connect(mapStateToProps, { getItems })(ItemList);
